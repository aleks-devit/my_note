import styled from "styled-components"
import ReactMarkdown from "react-markdown";
import {TextCustomScroll} from "../../styles/styled-components/CustomScroll";

export const NoteWrapper = styled.div`
  display: flex;
  height: 100%;
`

export const NoteTextArea = styled.textarea`
  flex: 0 0 50%;
  padding: 20px;
  font-size: 18px;
  outline: none;
  resize: none;
  border: none;
  overflow-y: scroll;
  ${TextCustomScroll}
`

export const NoteMarkDown = styled(ReactMarkdown)`
  flex: 0 0 50%;
  padding: 20px;
  outline: none;
  overflow-y: scroll;
  ${TextCustomScroll}
`