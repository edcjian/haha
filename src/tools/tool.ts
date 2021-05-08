import request from "../request";
import {MyData} from "../components/Home";

export const println=(arg: any)=>console.log(arg)

export function range(startAt:number = 0,size:number) {
        return [...Array(size).keys()].map(i => i + startAt);
}
class m{
    employee_id: string=''
    limit: number=0;
    offset: number=0

    constructor(employee_id: string, limit: number, offset: number) {
        this.employee_id = employee_id;
        this.limit = limit;
        this.offset = offset;
    }
}
let a=new m('gt.150',10,3)
let ae:any={
    employee_id:1,
    limit:1,
    offset:1
}
let ap =new ae(1,2,3)



export async function fetchData(){

 let data=   await request.get<MyData[]>('employees',{
        params:new m('gt.150',10,3)
 })

    return data
    // return dp.map((i: { _id: any; }) => i._id)
}
