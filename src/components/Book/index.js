// @flow

import React, { Fragment } from "react";
import moment from "moment";
import { Form } from "react-final-form";
import Datepicker from "../Datepicker";
import type { RentData } from "../../store/types/cart";

type Props = {
  book: Book,
  onAddClick: () => void,
  onRemoveClick: () => void,
  rentData?: RentData,
  onFormSubmit: (data: RentData) => void,
};

export default ({
  book,
  rentData,
  onAddClick,
  onRemoveClick,
  onFormSubmit,
}: Props) => (
  <div className="card">
    <div className="card-body">
      <img className="card-img-top" src={book.img} alt={book.title} />
      <h5 className="card-title">{book.title}</h5>
      {rentData ? (
        <Fragment>
          <Form
            onSubmit={(data) => {
              onFormSubmit(data);
            }}
            initialValues={rentData}
          >
            {(formProps) => {
              const {
                values: { from, until },
                form,
              } = formProps;
              return (
                <Fragment>
                  <Datepicker
                    name="from"
                    label="From"
                    minDate={new Date()}
                    onChange={(newFrom) => {
                      const momentNewFrom = moment(newFrom);
                      if (momentNewFrom.isSameOrAfter(until, "day")) {
                        form.change(
                          "until",
                          momentNewFrom.add(1, "day").toDate()
                        );
                      }
                      form.submit();
                    }}
                  />
                  <Datepicker
                    name="until"
                    label="Until"
                    minDate={moment(from).add(1, "day").toDate()}
                    onChange={() => {
                      form.submit();
                    }}
                  />
                </Fragment>
              );
            }}
          </Form>
          <button className="btn btn-danger btn-block" onClick={onRemoveClick}>
            Remove
          </button>
        </Fragment>
      ) : (
        <button className="btn btn-success btn-block" onClick={onAddClick}>
          Add
        </button>
      )}
    </div>
  </div>
);
