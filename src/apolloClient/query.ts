import {gql} from "@apollo/client/core";

/*export const GET=gql`
    query {

        search(text:"an"){
            __typename
            ... on Human{
                name
                height
            }
            ... on Starship{
                name
                length
            }
        }
    }
`*/

export const FIND=gql`
    query MyQuery {
        departments(limit: 2) {
            department_id
            department_name
            location{
                country_id
                postal_code
            }
        }
    }
`
export const TEST = gql`
    query {
       locations_by_pk(location_id: 1000){
           street_address
           postal_code
           
       }
    }
`
export const FINDNAME = gql`
    query  findName{
     locations{
         country_id
         location_id
     }
        }
    
`
