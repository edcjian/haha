import React from 'react';
import logo from './logo.svg';
import './App.css';
import {gql} from "@apollo/client/core";
import {ApolloClient, ApolloProvider, InMemoryCache, useQuery} from '@apollo/client';
import {Home} from "./components/Home";
import {Lists} from "./components/List";
import {Route} from "react-router-dom";
import {MyRoute} from "./components/Routers";
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:8080/graphql"
});
function App() {
  return (
      <ApolloProvider client={client}>
    <div className="App">

<Home/>
{/*      <Kot ke={12}/>*/}

    </div>
      </ApolloProvider>
  );
}


export default App;
