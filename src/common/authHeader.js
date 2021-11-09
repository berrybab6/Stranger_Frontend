import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { useAuthToken } from "./auth";
import { AUTH_TOKEN } from "./constants";

const httpLink = new HttpLink({ uri: "http://127.0.0.1:8000/graphql" });

const authMiddleware = (authToken) =>
  new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    if (authToken) {
      operation.setContext({
        headers: {
          authorization: `JWT ${authToken}`,
        },
      });
    }

    return forward(operation);
  });

const cache = new InMemoryCache({});

export const useAppApolloClient = () => {
  const [authToken] = localStorage.getItem(AUTH_TOKEN);

  return new ApolloClient({
    link: authMiddleware(authToken).concat(httpLink),
    cache,
  });
};