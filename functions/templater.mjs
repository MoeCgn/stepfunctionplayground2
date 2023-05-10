import _ from "lodash";
import middy from '@middy/core';
import {GenericError} from "./genericError.mjs";

import * as url from 'url';
import ejs from "ejs";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const handler = middy()
  .handler(async (event) => {

    const input = _.get(event, 'input', {});
    const config = _.get(event, 'config', {});
    const templateName = _.get(event, 'templateName');
    let template = _.get(event, 'template');

    _.set(input, '_config', config);

    if(!_.isEmpty(template)){
      return ejs.render(template, input);
    } else if(!_.isEmpty(templateName)) {
      return ejs.renderFile(`${__dirname}/templates/${templateName}.ejs`, input, {async: true});
    } else {
      throw new GenericError('Misconfiguration','Missing either template or templateName');
    }

  });

