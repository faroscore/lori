// @flow

import React from "react";
import { Field } from "react-final-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

type Props = {
  name: string,
  label: React$Node,
  minDate?: Date,
  onChange?: (d: Date) => void,
};

export default ({ name, label, minDate, onChange }: Props) => (
  <Field name={name}>
    {({ input }) => (
      <div className="mb-2">
        {label}
        <DatePicker
          selected={input.value}
          onChange={(date: Date) => {
            input.onChange(date);
            if (typeof onChange === "function") {
              onChange(date);
            }
          }}
          className="form-control"
          minDate={minDate}
          dateFormat="dd/MM/yyyy"
        />
      </div>
    )}
  </Field>
);
