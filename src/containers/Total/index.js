import React from "react";
import { connect } from "react-redux";
import { selectBookById } from "../../store/selectors/books";
import { getBookPrice } from "../../utils/prices";
import type { MapState } from "../../store/types";
import type { RentData } from "../../store/types/cart";

type OwnProps = {};

type StateProps = {
  total: number,
};

type Props = OwnProps & StateProps;

const Total = ({ total }: Props) =>
  !!total && (
    <section className="container">
      <h4>Total: {total}$</h4>
    </section>
  );

const mapState: MapState<OwnProps, StateProps> = (state) => {
  const { cart } = state;
  const total = Object.values(cart.cart).reduce((acc, rentData: RentData) => {
    const book = selectBookById(state, { bookId: rentData.bookId });
    return acc + getBookPrice(book, rentData);
  }, 0);
  return {
    total,
  };
};

export default connect(mapState)(Total);
