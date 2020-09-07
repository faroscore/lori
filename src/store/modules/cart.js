// @flow

import { createAction, createReducer } from "redux-act";
import type { CartState, RentData } from "../types/cart";

export type AddToCart = ActionCreator<RentData>;
export const addToCart: AddToCart = createAction("CART/add");

export type RemoveFromCart = ActionCreator<number>;
export const removeFromCart: RemoveFromCart = createAction("CART/remove");

export const defaultState: CartState = {
  cart: {},
};

export default createReducer(
  {
    [addToCart.toString()]: (state, payload) => ({
      ...state,
      cart: {
        ...state.cart,
        [payload.bookId]: payload,
      },
    }),

    [removeFromCart.toString()]: (state, payload) => {
      const cart = {
        ...state.cart,
      };

      delete cart[payload];

      return {
        ...state,
        cart,
      };
    },
  },
  defaultState
);
