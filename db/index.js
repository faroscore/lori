const TYPES = {
  REGULAR: 1,
  FICTION: 2,
  NOVEL: 3,
};

let id = 0;
const getBookId = () => ++id;

const books = [
  {
    id: getBookId(),
    title: "Book #1",
    type: TYPES.REGULAR,
  },
  {
    id: getBookId(),
    title: "Book #2",
    type: TYPES.REGULAR,
  },
  {
    id: getBookId(),
    title: "Book #3",
    type: TYPES.REGULAR,
  },
  {
    id: getBookId(),
    title: "Book #4",
    type: TYPES.REGULAR,
  },
  {
    id: getBookId(),
    title: "Book #5",
    type: TYPES.REGULAR,
  },
];

module.exports = () => ({
  books,
});
