import {SFNClient, StartExecutionCommand} from "@aws-sdk/client-sfn";
import _ from 'lodash';

const client = new SFNClient();
export const post = async (event) => {
  const {
    ACCOUNT_ID,
    REGION,
    STAGE
  } = process.env;

  const command = new StartExecutionCommand({
    stateMachineArn: `arn:aws:states:${REGION}:${ACCOUNT_ID}:stateMachine:analyzeCustomer${_.upperFirst(STAGE)}`,
    input: JSON.stringify(event),
  });

  const output = await client.send(command);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(output),
  }

}

