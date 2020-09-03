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
    img:
      "https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-06-1-300x300.png",
  },
  {
    id: getBookId(),
    title: "Book #2",
    type: TYPES.REGULAR,
    img:
      "https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-06-1-300x300.png",
  },
  {
    id: getBookId(),
    title: "Book #3",
    type: TYPES.REGULAR,
    img:
      "https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-06-1-300x300.png",
  },
  {
    id: getBookId(),
    title: "Book #4",
    type: TYPES.REGULAR,
    img:
      "https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-06-1-300x300.png",
  },
  {
    id: getBookId(),
    title: "Book #5",
    type: TYPES.REGULAR,
    img:
      "https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-06-1-300x300.png",
  },
];

module.exports = () => ({
  books,
});
