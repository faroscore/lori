// @flow

import type { BooksState } from "./books";
import type { CartState } from "./cart";

export type State = {
  books: BooksState,
  cart: CartState,
};

export type MapState<O, R> = (state: State, ownProps: O) => R;
