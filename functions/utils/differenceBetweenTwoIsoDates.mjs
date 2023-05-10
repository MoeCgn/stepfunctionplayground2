import {DateTime} from "luxon";

export const differenceBetweenTwoIsoDates = (isoDateTime1, isoDateTime2 , format) => {
  const dateTime1 = DateTime.fromISO(isoDateTime1);
  const dateTime2 = DateTime.fromISO(isoDateTime2);
  const diff = dateTime1.diff(dateTime2,format)
  return diff.toObject();
}
