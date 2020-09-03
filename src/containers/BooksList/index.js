import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBooks } from "../../store/modules/books";
import type { MapState } from "../../store/types";
import type { BooksState } from "../../store/types/books";

type OwnProps = {};

type StateProps = {
  books: BooksState,
};

type DispatchProps = {
  fetchBooks: () => void,
};

type Props = OwnProps & StateProps & DispatchProps;

const BooksList = ({ books, ...dispatchProps }: Props) => {
  useEffect(() => {
    if (!books.books.length) {
      dispatchProps.fetchBooks();
    }
  }, []);
  if (books.running) return "Loading...";
  if (books.error) return books.error;
  return books.books.map((bookId) => (
    <p key={bookId}>{books.book[bookId].title}</p>
  ));
};

const mapState: MapState<OwnProps, StateProps> = ({ books }) => ({ books });
const mapDispatch: DispatchProps = { fetchBooks };

export default connect(mapState, mapDispatch)(BooksList);
