import type { Components } from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

export const CodeBlock: Components['code'] = ({ className, children }) => {
  const [, language] = /language-(\w+)/u.exec(className || '') || []

  return (
    <SyntaxHighlighter
      PreTag="div"
      language={language}
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
    >
      {String(children).replace(/\n$/u, '')}
    </SyntaxHighlighter>
  )
}
