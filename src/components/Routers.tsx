import React, {Component, useState} from 'react';
import {BrowserRouter as Router, Route, Link, Switch, useHistory, BrowserRouter} from 'react-router-dom'
import {useRequest} from "ahooks";
import {fetchData} from "../tools/tool";
import {Lists} from "./List";
import {Text} from "./Home"

export interface Routes {
    name: string,
    component: () => JSX.Element
}

export const MyRoute = ({children}: any) => {
    const info: Routes[] = [
        {name: "/text", component: Text},

    ]
    return <BrowserRouter>
        <Switch>
            {children}
            {info.map(it => (
                <Route path={it.name} component={it.component}/>))}
        </Switch>
    </BrowserRouter>


}
