import reducer, { defaultState } from "./books";
import * as actions from "./books";

const booksMock = [
  {
    id: 1,
    type: 1,
    img: "",
    title: "#1",
  },
  {
    id: 2,
    type: 2,
    img: "",
    title: "#2",
  },
];

const typesMock = [
  {
    id: 1,
    name: "#1",
  },
  {
    id: 2,
    name: "#2",
  },
];

describe("books reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(defaultState);
  });

  it("fetching books start", () => {
    expect(reducer(defaultState, actions.fetchBooksStart())).toEqual({
      books: [],
      book: {},
      type: {},
      running: true,
      error: null,
    });
  });

  it("fetching books success", () => {
    expect(reducer(defaultState, actions.fetchBooksSuccess(booksMock))).toEqual(
      {
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
        type: {},
        running: false,
        error: null,
      }
    );
  });

  it("fetching books fail", () => {
    expect(
      reducer(defaultState, actions.fetchBooksFail("something went wrong"))
    ).toEqual({
      books: [],
      book: {},
      type: {},
      running: false,
      error: "something went wrong",
    });
  });

  it("fetching types start", () => {
    expect(reducer(defaultState, actions.fetchTypesStart())).toEqual({
      books: [],
      book: {},
      type: {},
      running: true,
      error: null,
    });
  });

  it("fetching types success", () => {
    expect(reducer(defaultState, actions.fetchTypesSuccess(typesMock))).toEqual(
      {
        books: [],
        book: {},
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
      }
    );
  });

  it("fetching types fail", () => {
    expect(
      reducer(defaultState, actions.fetchBooksFail("something went wrong"))
    ).toEqual({
      books: [],
      book: {},
      type: {},
      running: false,
      error: "something went wrong",
    });
  });
});
