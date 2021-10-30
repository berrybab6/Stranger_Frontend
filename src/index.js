import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, createHttpLink } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { InMemoryCache } from '@apollo/client';
import './index.css';

import App from './App';

import * as serviceWorker from './serviceWorker'
// import reportWebVitals from './reportWebVitals';



const client = new ApolloClient({
  uri:"http://127.0.0.1:8000/graphql",
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