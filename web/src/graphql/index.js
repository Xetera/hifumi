import Vue from "vue";
import VueApollo from "vue-apollo";
import { WebSocketLink } from "apollo-link-ws";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { HttpLink } from "apollo-link-http";
import fetch from "isomorphic-fetch";
import gql from "graphql-tag";

// Install the vue plugin
Vue.use(VueApollo);

// websocket subscriptions connections do not work in a browser environment
const wsLink = new WebSocketLink({
  uri: process.env.VUE_APP_GRAPHQL_WS,
  fetch,
  options: {
    connectionParams: {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
        // cookie: document.cookie
      }
    },
    reconnect: true
  }
});

const httpLink = new HttpLink({
  uri: process.env.VUE_APP_GRAPHQL_HTTP,
  fetch
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

export const apolloProvider = new VueApollo({
  defaultClient: client,
  errorHandler(error) {
    // TODO: clear cookies here if 401
    console.error(error);
  }
});

export const graphql = q =>
  gql`
    ${q}
  `;
