import reducer, { defaultState } from "./cart";
import * as actions from "./cart";

describe("cart reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(defaultState);
  });

  it("adding to cart", () => {
    expect(
      reducer(
        defaultState,
        actions.addToCart({
          bookId: 1,
          from: "2020-09-03",
          until: "2020-09-04",
        })
      )
    ).toEqual({
      cart: {
        1: {
          bookId: 1,
          from: "2020-09-03",
          until: "2020-09-04",
        },
      },
    });
  });

  it("removing from cart", () => {
    expect(
      reducer(
        {
          cart: {
            1: {
              bookId: 1,
              from: "2020-09-03",
              until: "2020-09-04",
            },
            2: {
              bookId: 2,
              from: "2020-09-03",
              until: "2020-09-04",
            },
          },
        },
        actions.removeFromCart(1)
      )
    ).toEqual({
      cart: {
        2: {
          bookId: 2,
          from: "2020-09-03",
          until: "2020-09-04",
        },
      },
    });
  });

  it("changing rent data", () => {
    expect(
      reducer(
        {
          cart: {
            1: {
              bookId: 1,
              from: "2020-09-03",
              until: "2020-09-04",
            },
            2: {
              bookId: 2,
              from: "2020-09-03",
              until: "2020-09-04",
            },
          },
        },
        actions.addToCart({
          bookId: 1,
          from: "2020-09-10",
          until: "2020-09-12",
        })
      )
    ).toEqual({
      cart: {
        1: {
          bookId: 1,
          from: "2020-09-10",
          until: "2020-09-12",
        },
        2: {
          bookId: 2,
          from: "2020-09-03",
          until: "2020-09-04",
        },
      },
    });
  });
});
