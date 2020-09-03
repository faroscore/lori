// @flow

import { createSelector } from "reselect";
import type { State } from "../types";
import type { CartState } from "../types/cart";

const getCartState = (state: State): CartState => state.cart;

export const selectRentDataById = createSelector(
  [getCartState, (state, props: { bookId: number }) => props.bookId],
  (cartState: CartState, bookId: number): void | RentData =>
    cartState.cart[bookId]
);
