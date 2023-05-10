const {promises: fsPromises} = require("fs");
module.exports = async ({_, resolveVariable}) => {
  const fsPromises = require('fs').promises;

  const stage = await resolveVariable('sls:stage');

  let stateMachinesUseExactVersion = false;
  let logRetentionInDays = 14;

  switch (stage) {
    case 'prod':
      stateMachinesUseExactVersion = true
      logRetentionInDays = 180;
      break;
  }

  return {
    stateMachinesUseExactVersion,
    logRetentionInDays
  }
}


