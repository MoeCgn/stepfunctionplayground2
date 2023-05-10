import _ from "lodash";

export const getOrderById = async (event) => {

  const id = _.get(event, 'pathParameters.id', '');

  switch (id) {
    case '6ac5d84b-1ce7-473b-bb97-073fbc040e17':
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(await import('./6ac5d84b-1ce7-473b-bb97-073fbc040e17.json', {assert: {type: "json"}})),
      };
    default:
      return {
        statusCode: 404,
      }
  }
};
