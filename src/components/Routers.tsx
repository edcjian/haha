import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link, Switch, useHistory, BrowserRouter} from 'react-router-dom'
import {useRequest} from "ahooks";
import {fetchData} from "../tools/tool";
import {Lists} from "./List";


export const MyRoute=({children}:any)=>
    <BrowserRouter>
        <Switch>
            {
                children
            }
        </Switch>
    </BrowserRouter>



