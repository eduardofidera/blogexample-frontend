import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../../components/Layout'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { BrowserRouter } from "react-router-dom";

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjlpogbhf1k9k0178tdc2kh41' })

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
  })

const App = () => (
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    </ApolloProvider>
);

ReactDOM.hydrate(<App />, document.getElementById('app'));