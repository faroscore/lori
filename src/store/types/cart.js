// @flow

export type RentData = {
  bookId: number,
  from: Date,
  until: Date,
};

export type CartState = {
  cart: {
    [bookId: number]: RentData,
  },
};
