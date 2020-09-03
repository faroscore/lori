import { getBookPrice } from "./prices";

const REGULAR_TYPE = { id: 1, name: "Regular" };
const FICTION_TYPE = { id: 2, name: "Fiction" };
const NOVEL_TYPE = { id: 3, name: "Novel" };

it("price generator with empty and wrong data", () => {
  expect(getBookPrice(null, null)).toEqual(0);
  expect(getBookPrice(REGULAR_TYPE, null)).toEqual(0);
  expect(
    getBookPrice(null, {
      bookId: null,
      from: "2020-09-03",
      until: "2020-09-04",
    })
  ).toEqual(0);
  expect(
    getBookPrice(REGULAR_TYPE, {
      bookId: null,
      from: null,
      until: "2020-09-04",
    })
  ).toEqual(0);
  expect(
    getBookPrice(REGULAR_TYPE, {
      bookId: null,
      from: "2020-09-03",
      until: null,
    })
  ).toEqual(0);
  expect(
    getBookPrice(REGULAR_TYPE, {
      bookId: null,
      from: null,
      until: null,
    })
  ).toEqual(0);
  expect(
    getBookPrice(REGULAR_TYPE, {
      bookId: null,
      from: "2020-09-03",
      until: "2020-09-03",
    })
  ).toEqual(0);
  expect(
    getBookPrice(REGULAR_TYPE, {
      bookId: null,
      from: "2020-09-03",
      until: "2020-09-02",
    })
  ).toEqual(0);
});

it("price generator for regular type", () => {
  expect(
    getBookPrice(REGULAR_TYPE, {
      bookId: 1,
      from: "2020-09-03",
      until: "2020-09-04",
    })
  ).toEqual(1.5);

  expect(
    getBookPrice(REGULAR_TYPE, {
      bookId: 1,
      from: "2020-09-03",
      until: "2020-09-10",
    })
  ).toEqual(10.5);

  expect(
    getBookPrice(REGULAR_TYPE, {
      bookId: 1,
      from: "2020-09-03",
      until: "2020-09-12",
    })
  ).toEqual(13.5);
});

it("price generator for fiction type", () => {
  expect(
    getBookPrice(FICTION_TYPE, {
      bookId: 1,
      from: "2020-09-03",
      until: "2020-09-04",
    })
  ).toEqual(3);

  expect(
    getBookPrice(FICTION_TYPE, {
      bookId: 1,
      from: "2020-09-03",
      until: "2020-09-10",
    })
  ).toEqual(21);

  expect(
    getBookPrice(FICTION_TYPE, {
      bookId: 1,
      from: "2020-09-03",
      until: "2020-09-12",
    })
  ).toEqual(27);
});

it("price generator for novel type", () => {
  expect(
    getBookPrice(NOVEL_TYPE, {
      bookId: 1,
      from: "2020-09-03",
      until: "2020-09-04",
    })
  ).toEqual(1.5);

  expect(
    getBookPrice(NOVEL_TYPE, {
      bookId: 1,
      from: "2020-09-03",
      until: "2020-09-10",
    })
  ).toEqual(10.5);

  expect(
    getBookPrice(NOVEL_TYPE, {
      bookId: 1,
      from: "2020-09-03",
      until: "2020-09-12",
    })
  ).toEqual(13.5);
});
