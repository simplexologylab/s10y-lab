// https://github.com/awslabs/aws-mobile-appsync-sdk-js/blob/master/README.md

import AWSAppSyncClient from 'aws-appsync';
import fetch from 'isomorphic-fetch';

export const client = new AWSAppSyncClient({
  url: `https://kzg5zidnovh73om2b3jrlcboqm.appsync-api.us-east-2.amazonaws.com/graphql`,
  region: `us-east-2`,
  auth: {
      type: "API_KEY",
      apiKey: "da2-ruqgy2vnenhsdcqtpfb2r4qm3m"
  },
  offlineConfig: {
      callback: (err, succ) => {
          if (err) {
              const { mutation, variables } = err;
              console.warn(`Error for ${mutation}`, err, variables);
          } else {
              const { mutation, variables } = succ;
              console.info(`SUCCESS for ${mutation}`, succ, variables);
          }
      }
  },
  fetch
});