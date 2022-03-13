import React, {useContext, useEffect, useState} from 'react';
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {NoteMarkDown, NoteTextArea, NoteWrapper} from "./styles"
import {gql, useLazyQuery, useMutation} from "@apollo/client";
import {useRouter} from 'next/router'
import {Context} from '../../context'

const GET_DOCUMENT = gql`
    query Document ($_id: String!){
        document (_id: $_id) {
            _id
            title
            content
        }
    }
`

const UPDATE_DOCUMENT = gql`
    mutation UpdateDocument ($_id: String!, $content: String){
        updateDocument (payload: {_id: $_id, content: $content}) {
            _id
            title
            content
        }
    }
`

const Note = () => {
  const {state, dispatch} = useContext(Context);
  const [updateDocument, {data, loading, error}] = useMutation(UPDATE_DOCUMENT);
  const router = useRouter()
  const {docId} = router.query
  const [getDocumentContent] = useLazyQuery(
    GET_DOCUMENT,
    {variables: {_id: docId}}
  );
  // Тут я выставляю инпут получая данные с кеша
  const [input, setInput] = useState('')

  const callGetDocumentContent = () => {
    if (docId) {
      getDocumentContent()
        .then(data => {
          if (!!data?.data?.document) setInput(data?.data?.document.content)
        })
    }
  }

  useEffect(() => {
    callGetDocumentContent()
  }, [docId])

  useEffect(() => {
    if (!!state.saveDocument) {
      dispatch({
        type: "CHANGE_STATUS",
        payload: 'Сохранение...',
      })
      updateDocument({
        variables: {
          _id: docId,
          content: input
        }
      }).then(() => {
        dispatch({
          type: "CHANGE_STATUS",
          payload: 'Сохранено!',
        })
        dispatch({
          type: "SAVE_DOCUMENT",
          payload: false,
        })
      }).catch(() => {
        dispatch({
          type: "CHANGE_STATUS",
          payload: 'Ошибка!',
        })
      }).finally(() => {
        setTimeout(() => {
          dispatch({
            type: "CHANGE_STATUS",
            payload: 'Ожидание...',
          })
        }, 3000)
      })

    }
  }, [state.saveDocument])

  return (
    <NoteWrapper>
      <NoteTextArea autoFocus value={input} onChange={e => setInput(e.target.value)}/>
      <NoteMarkDown
        components={{
          code({inline, className, children}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter language={match[1]} PreTag="div">
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className}>
                {children}
              </code>
            )
          }
        }}
      >
        {input}
      </NoteMarkDown>
    </NoteWrapper>
  );
};

export default Note;