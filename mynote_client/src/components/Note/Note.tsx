import React, {useContext, useEffect, useState} from 'react';
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {NoteMarkDown, NoteTextArea, NoteWrapper} from "./styles"
import {useLazyQuery, useMutation} from "@apollo/client";
import {useRouter} from 'next/router'
import {Context} from '../../context'
import {GET_DOCUMENT, UPDATE_DOCUMENT} from './queries';


const Note = () => {
  // @ts-ignore
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
  const [mode, setMode] = useState({
    textarea: 50,
    markdown: 50
  })
  const callGetDocumentContent = () => {
    if (docId) {
      getDocumentContent()
        .then(data => {
          if (!!data?.data?.document) setInput(data?.data?.document.content)
        })
    }
  }

  useEffect(() => {
    switch (state.viewMode) {
      case 'only-text':
        setMode({
          textarea: 100,
          markdown: 0
        })
        break;
      case 'only-image':
        setMode({
          textarea: 0,
          markdown: 100
        })
        break;
      default:
        setMode({
          textarea: 50,
          markdown: 50
        })
        break;
    }
  }, [state.viewMode])

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
      <NoteTextArea width={mode.textarea} autoFocus value={input} onChange={e => setInput(e.target.value)}/>
      <NoteMarkDown
        width={mode.markdown}
        components={{
          code({inline, className, children}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter language={match[1]} PreTag="div">
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className}>{children}</code>
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