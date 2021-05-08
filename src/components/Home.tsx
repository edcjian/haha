import React, {useEffect, useRef, useState} from 'react';
import {useLazyQuery} from "@apollo/client";
import {GET} from "../apolloClient/query";
import {fetchData, range} from "../tools/tool";
import {useEventEmitter, useReactive, useRequest} from 'ahooks';
import {MyRoute} from "./Routers";
import {Route} from "react-router-dom";

export interface MyData {
    employee_id: number,
    first_name: string,
    last_name: string,
    email: string,
    phone_number: string,
    job_id: string,
    salary: number,
    commission_pct: string,
    manager_id: number,
    department_id: number,
    hiredate: string
}

export const Home = () => {
    const [info, setInfo] = useState<MyData[]>();
    const {data, error, loading} = useRequest<MyData[]>(fetchData)

    useEffect(() => {
                 data?.{}
            }, []);
    return <div className="h-80 w-96 ml-52 bg-blue-500   pt-16 ">
        <div className="bg-red-700 ">
            {

                  info?.map(it=>(
                      <div className="flex">
                    <h1>{it.first_name}</h1>
                    <h1>{it.employee_id}</h1>
                      </div>
                          ))
            }
        </div>
    </div>


}


