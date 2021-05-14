import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {gql} from "@apollo/client/core";
import {ApolloClient, ApolloProvider, InMemoryCache, useQuery} from '@apollo/client';
import {First, Home, Text} from "./components/Home";
import {Lists} from "./components/List";
import {Route} from "react-router-dom";
import {MyRoute} from "./components/Routers";

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://111.229.235.215:8080/v1/graphql",
    headers: {
        'x-hasura-admin-secret':'myadminsecretkey'
    }
});

function App() {
    return <ApolloProvider client={client}>
        <div className="App">
            <div className="container mx-auto">
                <MyRoute>
                    <First/>
                </MyRoute>

            </div>


        </div>
    </ApolloProvider>

}


export default App;
