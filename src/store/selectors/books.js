// @flow

import { createSelector } from "reselect";
import type { Book, BooksState } from "../types/books";
import type { State } from "../types";

const getBooksState = (state: State): BooksState => state.books;

export const selectBookById = createSelector(
  [getBooksState, (state, props: { bookId: number }) => props.bookId],
  (booksState: BooksState, bookId: number): Book => booksState.book[bookId]
);
