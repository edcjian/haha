import React, {createRef, useEffect, useRef, useState} from 'react';
import {useLazyQuery, useQuery} from "@apollo/client";
import {FIND, FINDNAME, TEST} from "../apolloClient/query";
import {fetchData, println, range} from "../tools/tool";
import {useEventEmitter, useReactive, useRequest} from 'ahooks';
import {MyRoute} from "./Routers";
import {Route, useHistory} from "react-router-dom";
import TextArea, {TextAreaRef} from "antd/es/input/TextArea";
import {Button, Form, Input} from "antd";
import request from "../request";
import {useForm} from "antd/es/form/Form";
import {Departments, Locations, Locations_Order_By, Maybe, Query_RootDepartments_By_PkArgs} from "../generated/graphql";

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
export interface Graph{

}
export const Home = () => {
    const [info, setInfo] = useState<MyData[]>();
    const {data, error, loading} = useRequest<MyData[]>(fetchData)
    useEffect(() => {
        if (data !== undefined) {
            setInfo(data)
        }
    }, [data]);
    return <div className="h-80 w-96 ml-52 bg-blue-500 pt-16 ">
        <div className="bg-red-700 ">
            {
                info?.map(it => (
                    <div className="flex">
                        <h1>{it.first_name}</h1>
                        <h1>{it.employee_id}</h1>
                    </div>
                ))
            }
        </div>
    </div>


}


export const First = () => {
    const [info, setInfo] = useState<Maybe<Locations>[]>();
    const { loading, error, data } = useQuery<Maybe<Locations>[]>(FINDNAME);
    const history = useHistory();
        useEffect(() => {
             console.log(data);
             setInfo(data)
            console.log(data?.[5])

            }, [data, info]);
        console.log(data)
    // info?.map(it=>console.log(it?.department_id))

         // console.log(info?.[0])
    return loading? <p>loading...</p>:
        <div className="w-222 h-100 bg-red-500 flex justify-center">
        {/*{  info?.map(it=>(<div>{it?.department_name}</div>))}*/}
        <Button type="primary" shape="circle" size='small' onClick={() => {
            history.push('/text')
        }}>123</Button>
    </div>
}
export const Text = () => {
    const [form] = useForm();
    const [info, setInfo] = useState<string>();
    const {data, error, loading} = useRequest<string>(
        ()=>request.get('')
    )

    const tkRefs = useRef<TextAreaRef>(null)
    useEffect(() => {
        if (data !== undefined) {
            // setInfo(data)
        }
    }, [data]);
    return loading? <p>loading...</p>:
        <div className="w189 h18 bg-green-400">
        <TextArea ref={tkRefs}/>
        <Button type="primary" onClick={() =>{
                console.log(tkRefs.current?.resizableTextArea?.textArea.defaultValue)
        }
        }>
            Submit
        </Button>

    </div>

}

