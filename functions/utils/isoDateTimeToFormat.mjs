import {DateTime} from "luxon";

export const isoDateTimeToFormat = (isoDateTime, format) => {
  const dateTime = DateTime.fromISO(isoDateTime);
  return dateTime.toFormat(format)
}
