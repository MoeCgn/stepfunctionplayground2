import _ from 'lodash';

export const formatHttpError = (status, output = null, error = null, cause = null) => {

  let statusCode;
  let body;

  console.log(status, output, error, cause);

  if (_.isObject(cause)) {
    error = cause.error;
    cause = cause.cause;
  }

  switch (true) {
    case status === "SUCCEEDED":
      statusCode = 200;
      body = output;
      break;
    case status === "FAILED" && error === "NotFoundError":
      statusCode = 404;
      body = JSON.stringify({
        error,
        cause
      })
      break;
    case status === "FAILED" && (error === "TypeNotSupportedError" || error === "ValidationError"):
      statusCode = 400;
      body = JSON.stringify({
        error,
        cause
      })
      break;
    default:
      statusCode = 500;
      body = JSON.stringify({
        error: 'Internal Server Error'
      });
  }

  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body
  };
}
