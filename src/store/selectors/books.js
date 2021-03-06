// @flow

import { createSelector } from "reselect";
import type { Book, BooksState, BookType } from "../types/books";
import type { State } from "../types";

const getBooksState = (state: State): BooksState => state.books;

export const selectBookById = createSelector(
  [getBooksState, (state, props: { bookId: number }) => props.bookId],
  (booksState: BooksState, bookId: number): Book => booksState.book[bookId]
);

export const selectBookTypeById = createSelector(
  [getBooksState, selectBookById],
  (booksState: BooksState, book: Book): void | BookType =>
    booksState.type[book.type]
);
