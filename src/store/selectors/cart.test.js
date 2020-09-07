import { selectRentDataById } from "./cart";

const stateMock = {
  books: {},
  cart: {
    cart: {
      1: {
        bookId: 1,
        from: "2020-09-03",
        until: "2020-09-04",
      },
    },
  },
};

describe("cart selector", () => {
  it("should select empty rent data", () => {
    expect(
      selectRentDataById(stateMock, {
        bookId: 2,
      })
    ).toBeUndefined();
  });

  it("should select rent data", () => {
    expect(
      selectRentDataById(stateMock, {
        bookId: 1,
      })
    ).toEqual({ bookId: 1, from: "2020-09-03", until: "2020-09-04" });
  });
});
