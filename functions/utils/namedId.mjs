import {DateTime} from "luxon";
import _ from "lodash";

export const namedId = (prefix, dateFormat) => {
  const now = DateTime.now();
  return `${prefix}${now.toFormat(dateFormat)}${_.random(9)}`;
}
