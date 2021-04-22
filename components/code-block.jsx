import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import colors from 'tailwindcss/colors'

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={{
        imports: {
          color: '#F92D8E',
        },
        function: {
          color: '#F92D8E',
        },
        keyword: {
          color: '#88a6f1',
        },
        string: {
          color: colors.coolGray['300'],
        },
        comment: {
          color: colors.coolGray['400'],
        },
      }}
      tabIndex="0"
    >
      {value}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
