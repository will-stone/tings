import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import colors from 'tailwindcss/colors'

const CodeBlock = ({
  // eslint-disable-next-line no-unused-vars
  node,
  inline,
  className,
  children,
  ...props
}) => {
  const match = /language-(\w+)/u.exec(className || '')
  return !inline && match ? (
    <SyntaxHighlighter
      PreTag="div"
      language={match[1]}
      style={{
        'pre[class*="language-"]': {
          background: 'transparent',
        },
        'imports': {
          color: '#F92D8E',
        },
        'function': {
          color: '#F92D8E',
        },
        'keyword': {
          color: '#88a6f1',
        },
        'string': {
          color: colors.gray['300'],
        },
        'comment': {
          color: colors.gray['400'],
        },
      }}
      tabIndex="0"
      {...props}
    >
      {String(children).replace(/\n$/u, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  )
}

export default CodeBlock
