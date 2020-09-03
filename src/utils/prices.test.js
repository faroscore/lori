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
      from: "03/09/2020",
      until: "04/09/2020",
    })
  ).toEqual(0);
  expect(
    getBookPrice(null, {
      bookId: null,
      from: null,
      until: "04/09/2020",
    })
  ).toEqual(0);
  expect(
    getBookPrice(null, {
      bookId: null,
      from: "03/09/2020",
      until: null,
    })
  ).toEqual(0);
  expect(
    getBookPrice(null, {
      bookId: null,
      from: "03/09/2020",
      until: "03/09/2020",
    })
  ).toEqual(0);
  expect(
    getBookPrice(null, {
      bookId: null,
      from: "03/09/2020",
      until: "02/09/2020",
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
        from: new Date(),
        until: new Date(new Date().valueOf() + dayInMs),
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
        from: new Date(),
        until: new Date(new Date().valueOf() + dayInMs * 7),
      }
    )
  ).toEqual(7);
});
