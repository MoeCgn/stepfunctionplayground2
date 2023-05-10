import axios from 'axios';
import _ from 'lodash';
import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager";
import {Agent} from 'https';
import http from 'http';
import {GenericError} from "./genericError.mjs";

async function getSecret(secretId) {
  const client = new SecretsManagerClient();
  const command = new GetSecretValueCommand({
    SecretId: secretId,
  })
  const secretValue = await client.send(command);

  if (_.isEmpty(secretValue)) {
    throw new Error(`SecretValue of ${secretId} is empty`);
  }

  return JSON.parse(secretValue.SecretString);
}

export const handler = async (event) => {
  const request = _.get(event, 'request');

  if (!_.isObject(request)) {
    throw Error('Request is not set properly.');
  }

  const secretId = _.get(request, 'secretId', '');
  let headers = _.get(request, 'headers', {});
  let baseURL = _.get(request, 'baseURL');
  let shouldTlsCertificatesBeVerified = _.get(request, 'shouldTlsCertificatesBeVerified', true);
  const path = _.get(request, 'path', '');
  const params = _.get(request, 'params', {});
  const body = _.get(request, 'body', {});
  const method = _.toUpper(_.get(request, 'method', 'GET'));

  if (!_.isEmpty(secretId)) {
    const secret = await getSecret(secretId);

    if (!_.isEmpty(_.get(secret, 'headers'))) {
      headers = _.merge(headers, secret.headers);
    }

    if (!_.isEmpty(secret.baseURL)) {
      baseURL = _.get(secret, 'baseURL');
    }

    if (!_.isEmpty(_.get(secret, 'shouldTlsCertificatesBeVerified'))) {
      shouldTlsCertificatesBeVerified = _.get(secret, 'shouldTlsCertificatesBeVerified');
    }
  }

  if (_.isEmpty(baseURL)) {
    throw Error('baseURL is not set.');
  }

  const client = axios.create({
    baseURL,
    headers,
  });

  axios.defaults.httpsAgent = new Agent({
    rejectUnauthorized: !shouldTlsCertificatesBeVerified,
  });

  const config = {
    method,
    url: path,
  };

  if (method === 'POST' || method === 'PATCH' || method === 'PUT') {
    _.set(config, 'data', body);
  }

  if (!_.isEmpty(params)) {
    _.set(config, 'params', params);
  }

  try {
    return (await client(config)).data;
  } catch (e) {
    if (e.response) {
      const data = _.get(e, 'response.data');
      const status = _.get(e, 'response.status');
      const statusText = _.get(e, 'response.statusText');

      if (status >= 0 && !_.isEmpty(statusText)) {
        if (!_.isEmpty(data)) {
          console.error(JSON.stringify(data));
        }

        throw new GenericError(
          `${_.upperFirst(_.camelCase(http.STATUS_CODES[`${status}`]))}Error`,
          statusText,
        );
      }
    } else if (e.request) {
      console.error(e.request);
    } else {
      console.error('Error', e.message);
    }
    throw e;
  }
};
