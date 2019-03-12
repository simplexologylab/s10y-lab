import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Rehydrated } from 'aws-appsync-react';

import { client } from './client';

export const wrapRootElement = ({ element }) => (
    <ApolloProvider client={client}>
      <Rehydrated>
        {element}
      </Rehydrated>
    </ApolloProvider>
)