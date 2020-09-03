// @flow

import React from "react";
import moment from "moment";
import { Field } from "react-final-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { dateFormat } from "../../utils/formats";

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
          selected={new Date(input.value)}
          onChange={(date: ?Date) => {
            if (date) {
              const formatted = moment(date).format(dateFormat);
              input.onChange(formatted);
              if (typeof onChange === "function") {
                onChange(formatted);
              }
            }
          }}
          className="form-control"
          minDate={minDate}
          dateFormat="yyyy-MM-dd"
        />
      </div>
    )}
  </Field>
);
