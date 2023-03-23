import type { CodeComponent } from 'react-markdown/lib/ast-to-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

export const CodeBlock: CodeComponent = ({
  className,
  children,
  inline,
  ...props
}) => {
  const match = /language-(\w+)/u.exec(className || '')
  return !inline && match ? (
    <SyntaxHighlighter
      PreTag="div"
      language={match[1]}
      // @ts-expect-error -- https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/489
      style={{
        'comment': {
          color: '#9CA3AF',
        },
        'function': {
          color: '#F92D8E',
        },
        'imports': {
          color: '#F92D8E',
        },
        'keyword': {
          color: '#88a6f1',
        },
        'pre[class*="language-"]': {
          background: 'transparent',
        },
        'string': {
          color: '#D1D5DB',
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
