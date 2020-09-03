// @flow

export type RentData = {
  bookId: number,
  from: string,
  until: string,
};

export type CartState = {
  cart: {
    [bookId: number]: RentData,
  },
};
