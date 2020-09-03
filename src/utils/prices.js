// @flow

import moment from "moment";
import type { BookType } from "../store/types/books";
import type { RentData } from "../store/types/cart";

const TYPES = {
  REGULAR: 1,
  FICTION: 2,
  NOVEL: 3,
};

const REGULAR_PRICE = 1.5;
const REGULAR_FIXED_DAYS = 2;
const REGULAR_MIN_PRICE = 2;

const FICTION_PRICE = 3;

const NOVEL_PRICE = 1.5;
const NOVEL_MIN_PRICE = 4.5;

export const getBookPrice = (type: ?BookType, rentData: ?RentData): number => {
  const hasNoBookPrice =
    !type || !rentData || !rentData.from || !rentData.until;
  if (hasNoBookPrice) return 0;

  const untilMoment = moment(rentData.until);
  if (untilMoment.isSameOrBefore(rentData.from, "day")) return 0;

  const duration = untilMoment.diff(rentData.from, "day");

  switch (type.id) {
    case TYPES.REGULAR:
      return Math.max(
        REGULAR_MIN_PRICE,
        REGULAR_MIN_PRICE +
          Math.max(0, duration - REGULAR_FIXED_DAYS) * REGULAR_PRICE
      );
    case TYPES.FICTION:
      return duration * FICTION_PRICE;
    case TYPES.NOVEL:
      return Math.max(NOVEL_MIN_PRICE, duration * NOVEL_PRICE);
    default:
      return duration;
  }
};
