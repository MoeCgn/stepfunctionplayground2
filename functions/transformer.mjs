import _ from "lodash";

import jsonata from "jsonata";

import middy from '@middy/core';
import {cipher, decipher} from "./utils/obfuscate.mjs";
import {twoLetterToThreeLetterCountryCode} from "./utils/isoCountryCode.mjs";
import {namedId} from "./utils/namedId.mjs";
import {isoDateTimeToFormat} from "./utils/isoDateTimeToFormat.mjs";
import {differenceBetweenTwoIsoDates} from "./utils/differenceBetweenTwoIsoDates.mjs";


const random = (lower = 0, upper = 1, floating = false) => _.random(lower, upper, floating);

function checkIfSyntacticallyCorrect(value, part) {
  if (!/^([A-Za-z]+\/[A-Za-z]+)$/gm.test(value)) {
    throw new Error(`
}${part} is not syntactically properly set`);
  }
}

export const handler = middy()
  .handler(async (event) => {

    const query = _.get(event, 'query');

    if (_.isEmpty(query)) {
      throw new Error('Attribute: \'query\' must be set');
    }

    const input = _.get(event, 'input', {});
    const config = _.get(event, 'config', {});

    _.set(input, '_config', config);

    const from = _.get(event, 'from', '');


    if (!_.isEmpty(from)){
      checkIfSyntacticallyCorrect(from, 'From');
      const { validate: validInput } = await import(`./schemas/${from}.json.mjs`);
      if (!validInput(input)) {
        throw new Error(`Input has the following errors: ${_.join(_.map(validInput.errors, 'message'), ', ')}`);
      }
    }

    const expression = jsonata(query);

    if (_.includes(query, '_random')) {
      expression.registerFunction('_random', random, '<nn?b?:n>');
    }

    if (_.includes(query, '_namedId')) {
      expression.registerFunction('_namedId', namedId, '<ss:s>');
    }

    if (_.includes(query, '_twoLetterToThreeLetterCountryCode')) {
      expression.registerFunction('_twoLetterToThreeLetterCountryCode', await twoLetterToThreeLetterCountryCode, '<s:s>');
    }

    if (_.includes(query, '_cipher')) {
      expression.registerFunction('_cipher', await cipher, '<ssss?:s>');
    }

    if (_.includes(query, '_decipher')) {
      expression.registerFunction('_decipher', await decipher, '<ssss?:s>');
    }

    if (_.includes(query, '_isoDateTimeToFormat')) {
      expression.registerFunction('_isoDateTimeToFormat', isoDateTimeToFormat, '<ss:s>');
    }

    if (_.includes(query, '_differenceBetweenTwoIsoDates')) {
      expression.registerFunction('_differenceBetweenTwoIsoDates', differenceBetweenTwoIsoDates, '<sss:s>');
    }

    const output = await expression.evaluate(input)

    const to = _.get(event, 'to', '');

    if (!_.isEmpty(to)){
      checkIfSyntacticallyCorrect(to, 'To');
      const { validate: validOutput } = await import(`./schemas/${to}.json.mjs`);
      if (!validOutput(output)) {
        throw new Error(`Output has the following errors: ${_.join(_.map(validOutput.errors, 'message'), ', ')}`);
      }
    }

    return output;
  })
  // .use(jsonataMiddleware({
  //   plugins: [
  //     { name: '_twoLetterToThreeLetterCountryCode', implementation: await twoLetterToThreeLetterCountryCode, signature:'<s:s>' },
  //     { name: '_namedId', implementation: namedId, signature:'<ss:s>' },
  //     { name: '_random', implementation: random, signature:'<nn?b?:n>' }
  //   ]
  // }))
;
