import { selectBookById, selectBookTypeById } from "./books";

const stateMock = {
  books: {
    books: [1, 2],
    book: {
      1: {
        id: 1,
        type: 1,
        img: "",
        title: "#1",
      },
      2: {
        id: 2,
        type: 2,
        img: "",
        title: "#2",
      },
    },
    type: {
      1: {
        id: 1,
        name: "#1",
      },
      2: {
        id: 2,
        name: "#2",
      },
    },
    running: false,
    error: null,
  },
  cart: { cart: {} },
};

describe("books selector", () => {
  it("should select the book", () => {
    expect(
      selectBookById(stateMock, {
        bookId: 2,
      })
    ).toEqual({
      id: 2,
      type: 2,
      img: "",
      title: "#2",
    });
  });

  it("should select book type of the book", () => {
    expect(
      selectBookTypeById(stateMock, {
        bookId: 2,
      })
    ).toEqual({
      id: 2,
      name: "#2",
    });
  });
});
