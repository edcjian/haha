import {Avatar, List} from 'antd';
import React, {useState} from 'react';
import request from "../request";
import {useRequest} from "ahooks";
import {fetchData} from "../tools/tool";


export const Lists =()=>{
/*    const [data, setData] = useState([{
        "index": 1160,
        "title": "[原创]梆梆&爱加密java反调试绕过-Android安全-看雪论坛-安全社区|安全招聘|bbs.pediy.com",
        "url": "https://bbs.pediy.com/thread-259610.htm",
        "id": 9752,
        "parentId": "8591",
        "dateAddedLocal": null,
        "dateAddedUTC": null,
    }]);*/
    interface response {
        index: number,
        title: string,
        url: string,
        id: number,
        parentId: string,
        dateAddedLocal: string,
        dateAddedUTC: string
    }
    const { data, error, loading } =  useRequest<response[]>(fetchData);

    return <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        title={<a href={item.url}>{item.title}</a>}
                    />
                </List.Item>
            )}
        />

}
