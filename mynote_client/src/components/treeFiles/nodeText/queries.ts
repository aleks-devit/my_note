import {gql} from "@apollo/client";

export const UPDATE_DOCUMENT_TITLE = gql`
    mutation UpdateDocument ($_id: String!, $title: String){
        updateDocument (payload: {_id: $_id, title: $title}) {
            _id
            title
        }
    }
`

export const UPDATE_FOLDER_TITLE = gql`
    mutation UpdateFolder ($_id: String!, $title: String){
        updateFolder (payload: {_id: $_id, title: $title}) {
            _id
            title
        }
    }
`