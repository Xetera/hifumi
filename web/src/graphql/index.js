import Vue from "vue";
import VueApollo from "vue-apollo";
import { WebSocketLink } from "apollo-link-ws";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink, split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { HttpLink } from "apollo-link-http";
import fetch from "isomorphic-fetch";
import gql from "graphql-tag";
import { setContext } from "apollo-link-context";
import { kickToFrontPage } from "../router/guards";

const authLink = setContext(async () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
}));

// Install the vue plugin
Vue.use(VueApollo);

// websocket subscriptions connections do not work in a browser environment
const wsLink = new WebSocketLink({
  uri: process.env.VUE_APP_GRAPHQL_WS,
  fetch,
  options: {
    lazy: true,
    reconnect: true,
    connectionParams: () => {
      const token = localStorage.getItem("token");
      return {
        headers: {
          authorization: `Bearer ${token}`
        }
      };
    }
  }
});

const httpLink = new HttpLink({
  uri: process.env.VUE_APP_GRAPHQL_HTTP,
  fetch,
  fetchOptions: {
    lazy: true,
    cache: "no-cache",
    headers: {
      Authentication: `Bearer ${localStorage.getItem("token")}`
    }
  }
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
  // link,
  link: authLink.concat(link),
  cache: new InMemoryCache()
});

export const apolloProvider = new VueApollo({
  defaultClient: client,
  errorHandler(error) {
    console.log("error with the request");
    // TODO: clear localStorage here if 401
    console.error(error.message);
  }
});

export const graphql = q =>
  gql`
    ${q}
  `;
