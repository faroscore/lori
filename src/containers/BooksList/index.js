import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { fetchBooks } from "../../store/modules/books";
import type { MapState } from "../../store/types";
import type { BooksState } from "../../store/types/books";
import Book from "../Book";

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
  return (
    <section className="container">
      {books.running ? (
        <h3>Loading...</h3>
      ) : (
        <Fragment>
          {books.error ? (
            <h3>{books.error}</h3>
          ) : (
            <div className="row">
              {books.books.map((bookId) => (
                <div className="col-sm-3 mb-3" key={bookId}>
                  <Book bookId={bookId} />
                </div>
              ))}
            </div>
          )}
        </Fragment>
      )}
    </section>
  );
};

const mapState: MapState<OwnProps, StateProps> = ({ books }) => ({ books });
const mapDispatch: DispatchProps = { fetchBooks };

export default connect(mapState, mapDispatch)(BooksList);
