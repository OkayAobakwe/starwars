import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, NormalizedCacheObject, ApolloProvider } from "@apollo/client"
import { cache } from './cache';
import { PersonDetailProvider } from "./context/PersonDetailContext";
import { API_URL } from "./constants/index";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  uri: API_URL,
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <PersonDetailProvider>
        <App />
      </PersonDetailProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
