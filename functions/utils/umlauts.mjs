import _ from "lodash";

export function replaceSpecialChars(data) {
  let output = '';
  output = _.replace(data, /\u00e4/g, 'ae');
  output = _.replace(output, /\u00f6/, 'oe');
  output = _.replace(output, /\u00fc/g, 'ue');
  output = _.replace(output, /\u00c4/g, 'Ae');
  output = _.replace(output, /\u00d6/g, 'Oe');
  output = _.replace(output, /\u00dc/g, 'Ue');
  output = _.replace(output, /\u00df/, 'ss');

  return output;
}

