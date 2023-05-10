import middy from '@middy/core';
import httpRouterHandler from '@middy/http-router';
import inputOutputLogger from '@middy/input-output-logger';
import {postReturn as dhlPostReturn} from "./mocks/dhl/returns/postReturn.mjs";
import {getOrderById as commercetoolsGetOrderById} from "./mocks/commercetools/orders/getById.mjs";
import {postCreate} from "./mocks/postCreate.mjs"

const routes = [
  {
    method: 'POST',
    path: '/mock/dhl/returns',
    handler: dhlPostReturn
  },
  {
    method: 'GET',
    path: '/mock/commercetools/orders/{id}',
    handler: commercetoolsGetOrderById
  },
  { 
    method: 'GET', 
    path: '/post/create',
    handler: postCreate
  }
];

export const handler = middy()
  .use(inputOutputLogger())
  .handler(httpRouterHandler(routes));

