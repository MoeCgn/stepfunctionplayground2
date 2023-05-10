import middy from '@middy/core';
import httpRouterHandler from '@middy/http-router';
import inputOutputLogger from '@middy/input-output-logger';
import httpHeaderNormalizer from '@middy/http-header-normalizer';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import httpMultipartBodyParser from '@middy/http-multipart-body-parser';
import httpUrlEncodeBodyParser from '@middy/http-urlencode-body-parser'

import {get as getWebhook} from "./invokes/webhook/get.mjs";
import {post as postWebhook} from "./invokes/webhook/post.mjs";

const routes = [
  {
    method: 'GET',
    path: '/invoke/webhook',
    handler: getWebhook,
  },
  {
    method: 'POST',
    path: '/invoke/webhook',
    handler: postWebhook,
  }
];

export const handler = middy()
  .use(inputOutputLogger())
  .use(httpHeaderNormalizer())
  .use(httpJsonBodyParser())
  .use(httpMultipartBodyParser())
  .use(httpUrlEncodeBodyParser())
  .handler(httpRouterHandler(routes));
