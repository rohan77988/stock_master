// src/apollo.js
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createHttpLink } from '@apollo/client/link/http';
import { ApolloLink } from '@apollo/client/link/core';
import { createAuthLink } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';
import {Auth} from "aws-amplify";

const httpLink = createHttpLink({
    uri: 'https://ncqdpfwgsfefdecqff4w3obtfm.appsync-api.ap-south-1.amazonaws.com/graphql', // Update with your GraphQL endpoint
});

const authLink = createAuthLink({
    url: 'https://ncqdpfwgsfefdecqff4w3obtfm.appsync-api.ap-south-1.amazonaws.com/graphql', // Update with your GraphQL endpoint
    region: 'ap-south-1',
    auth: {
        type: 'AMAZON_COGNITO_USER_POOLS',
        credentials: () => Auth.currentCredentials(),
    },
});

const link = ApolloLink.from([
    authLink,
    createSubscriptionHandshakeLink({
        uri: 'wss://ncqdpfwgsfefdecqff4w3obtfm.appsync-realtime-api.ap-south-1.amazonaws.com/graphql', // Update with your real-time endpoint
    }),
    httpLink,
]);

const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
});

export default client;
