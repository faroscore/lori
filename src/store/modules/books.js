// @flow

import { createAction, createReducer } from "redux-act";
import { normalize, schema } from "normalizr";
import type { BooksState } from "../types/books";

const fetchBooksStart = createAction("BOOKS/START/fetch books");
const fetchBooksSuccess = createAction("BOOKS/SUCCESS/fetch books");
const fetchBooksFail = createAction("BOOKS/FAIL/fetch books");

const bookEntity = new schema.Entity("book");

const defaultState: BooksState = {
  books: [],
  book: {},
  running: false,
  error: null,
};

export default createReducer(
  {
    [fetchBooksStart.toString()]: (state) => ({
      ...state,
      running: true,
      error: null,
    }),

    [fetchBooksSuccess.toString()]: (state, payload) => {
      const {
        result,
        entities: { book },
      } = normalize(payload, [bookEntity]);
      return {
        ...state,
        running: false,
        books: result,
        book,
      };
    },

    [fetchBooksFail.toString()]: (state, payload) => ({
      ...state,
      running: false,
      error: payload,
    }),
  },
  defaultState
);

export const fetchBooks = () => (dispatch) => {
  dispatch(fetchBooksStart());
  fetch(`${process.env.REACT_APP_API_URL}/books`)
    .then((res) => res.json())
    .then((json) => {
      dispatch(fetchBooksSuccess(json));
    })
    .catch((e) => {
      dispatch(fetchBooksFail(e.message));
    });
};
