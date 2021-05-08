import {gql} from "@apollo/client/core";

export const GET=gql`
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
`
export const FIND=gql`
  
`
