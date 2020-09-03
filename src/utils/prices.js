// @flow

import moment from "moment";
import type { RentData } from "../store/types/cart";

export const getBookPrice = (book: ?Book, rentData: ?RentData): number => {
  const hasNoBookPrice =
    !book || !rentData || !rentData.from || !rentData.until;
  if (hasNoBookPrice) return 0;
  const untilMoment = moment(rentData.until);
  if (untilMoment.isBefore(rentData.from)) return 0;
  return untilMoment.diff(rentData.from, "day");
};
