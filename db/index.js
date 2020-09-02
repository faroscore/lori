let id = 0;
const getBookId = () => ++id;

const books = [
  {
    id: getBookId(),
    title: 'Book #1'
  },
  {
    id: getBookId(),
    title: 'Book #2'
  },
  {
    id: getBookId(),
    title: 'Book #3'
  },
  {
    id: getBookId(),
    title: 'Book #4'
  },
  {
    id: getBookId(),
    title: 'Book #5'
  }
]

module.exports = () => ({
  books,
})
