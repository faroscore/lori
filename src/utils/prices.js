// @flow

import moment from "moment";
import type { BookType } from "../store/types/books";
import type { RentData } from "../store/types/cart";

const TYPES = {
  REGULAR: 1,
  FICTION: 2,
  NOVEL: 3,
};

export const getBookPrice = (type: ?BookType, rentData: ?RentData): number => {
  const hasNoBookPrice =
    !type || !rentData || !rentData.from || !rentData.until;
  if (hasNoBookPrice) return 0;
  const untilMoment = moment(rentData.until);
  if (untilMoment.isBefore(rentData.from)) return 0;
  const duration = untilMoment.diff(rentData.from, "day");
  switch (type.id) {
    case TYPES.FICTION:
      return duration * 3;
    default:
      return duration * 1.5;
  }
};
