// @flow

import { createAction, createReducer } from "redux-act";
import { normalize, schema } from "normalizr";
import type { BooksState } from "../types/books";

export const fetchBooksStart = createAction("BOOKS/START/fetch books");
export const fetchBooksSuccess = createAction("BOOKS/SUCCESS/fetch books");
export const fetchBooksFail = createAction("BOOKS/FAIL/fetch books");

export const fetchTypesStart = createAction("BOOKS/START/fetch types");
export const fetchTypesSuccess = createAction("BOOKS/SUCCESS/fetch types");
export const fetchTypesFail = createAction("BOOKS/FAIL/fetch types");

const bookEntity = new schema.Entity("book");
const typeEntity = new schema.Entity("type");

export const defaultState: BooksState = {
  books: [],
  book: {},
  type: {},
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

    [fetchTypesStart.toString()]: (state) => ({
      ...state,
      running: true,
      error: null,
    }),

    [fetchTypesSuccess.toString()]: (state, payload) => {
      const {
        entities: { type },
      } = normalize(payload, [typeEntity]);
      return {
        ...state,
        running: false,
        type,
      };
    },

    [fetchTypesFail.toString()]: (state, payload) => ({
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

export const fetchTypes = () => (dispatch) => {
  dispatch(fetchTypesStart());
  fetch(`${process.env.REACT_APP_API_URL}/types`)
    .then((res) => res.json())
    .then((json) => {
      dispatch(fetchTypesSuccess(json));
    })
    .catch((e) => {
      dispatch(fetchTypesFail(e.message));
    });
};
