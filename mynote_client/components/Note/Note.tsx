import React, {useState} from 'react';
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {NoteWrapper, NoteTextArea, NoteMarkDown} from "./styles"

const Note = () => {
    const [input, setInput] = useState('')

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