import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, createHttpLink, HttpLink } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { InMemoryCache } from '@apollo/client';
import './index.css';
import { AUTH_TOKEN } from './common/constants';
import App from './App';
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from 'apollo-upload-client';

import * as serviceWorker from './serviceWorker'
// import reportWebVitals from './reportWebVitals';
const httpLink = new createUploadLink({ uri: "http://127.0.0.1:8000/graphql" });


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  
  cache:new InMemoryCache()
});

ReactDOM.render(
  <BrowserRouter>
  <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();