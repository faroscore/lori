import { getBookPrice } from "./prices";

const dayInMs = 1000 * 60 * 60 * 24;

it("price generator", () => {
  expect(
    getBookPrice(
      {
        id: 1,
        title: "Test book",
        url: "",
        type: 1,
      },
      null
    )
  ).toEqual(0);
  expect(
    getBookPrice(null, {
      bookId: null,
      from: "2020-09-03",
      until: "2020-09-04",
    })
  ).toEqual(0);
  expect(
    getBookPrice(null, {
      bookId: null,
      from: null,
      until: "2020-09-04",
    })
  ).toEqual(0);
  expect(
    getBookPrice(null, {
      bookId: null,
      from: "2020-09-03",
      until: null,
    })
  ).toEqual(0);
  expect(
    getBookPrice(null, {
      bookId: null,
      from: "2020-09-03",
      until: "2020-09-03",
    })
  ).toEqual(0);
  expect(
    getBookPrice(null, {
      bookId: null,
      from: "2020-09-03",
      until: "2020-09-02",
    })
  ).toEqual(0);
  expect(
    getBookPrice(
      {
        id: 1,
        title: "Test book",
        url: "",
        type: 1,
      },
      {
        bookId: 1,
        from: "2020-09-03",
        until: "2020-09-04",
      }
    )
  ).toEqual(1);
  expect(
    getBookPrice(
      {
        id: 1,
        title: "Test book",
        url: "",
        type: 1,
      },
      {
        bookId: 1,
        from: "2020-09-03",
        until: "2020-09-10",
      }
    )
  ).toEqual(7);
  expect(
    getBookPrice(
      {
        id: 1,
        title: "Test book",
        url: "",
        type: 1,
      },
      {
        bookId: 1,
        from: "2020-09-03",
        until: "2020-09-12",
      }
    )
  ).toEqual(9);
});
