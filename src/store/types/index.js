// @flow

import type { BooksState } from "./books";

export type State = {
  books: BooksState,
};

export type MapState<O, R> = (state: State, ownProps: O) => R;
