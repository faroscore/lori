// @flow

import React, { useCallback } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectBookById } from "../../store/selectors/books";
import { selectRentDataById } from "../../store/selectors/cart";
import { addToCart, removeFromCart } from "../../store/modules/cart";
import Book from "../../components/Book";
import type { MapState } from "../../store/types";
import type { Book as BookType } from "../../store/types/books";
import type { AddToCart, RemoveFromCart } from "../../store/modules/cart";
import type { RentData } from "../../store/types/cart";

type OwnProps = { bookId: number };
type StateProps = {
  book: BookType,
  rentData?: RentData,
};

type DispatchProps = {
  addToCart: AddToCart,
  removeFromCart: RemoveFromCart,
};

type Props = OwnProps & StateProps;

const BookContainer = ({ book, bookId, rentData, ...dispatchProps }: Props) => {
  const onAddClick = useCallback(() => {
    const today = moment();
    dispatchProps.addToCart({
      bookId,
      from: today.toDate(),
      until: today.add(1, "day").toDate(),
    });
  }, [bookId]);

  const onRemoveClick = useCallback(() => {
    dispatchProps.removeFromCart(bookId);
  }, [bookId]);

  const onFormSubmit = useCallback((newRentData) => {
    dispatchProps.addToCart(newRentData);
  }, []);

  return (
    <Book
      book={book}
      rentData={rentData}
      onAddClick={onAddClick}
      onRemoveClick={onRemoveClick}
      onFormSubmit={onFormSubmit}
    />
  );
};

const mapState: MapState<OwnProps, StateProps> = createStructuredSelector({
  book: selectBookById,
  rentData: selectRentDataById,
});

const dispatchProps: DispatchProps = {
  addToCart,
  removeFromCart,
};

export default connect(mapState, dispatchProps)(BookContainer);
