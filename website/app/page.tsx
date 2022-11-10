import type { FC } from 'react'
import { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

import packageJson from '../../package/package.json'
import t from '../data/typedoc.json'
// eslint-disable-next-line import/extensions
import CodeBlock from './components/code-block'

const Index: FC = () => (
  <div className="container" id="top">
    <header className="border-primary flex h-20 flex-col justify-center border-b bg-gray-900 md:container md:sticky md:top-0">
      <div className="flex items-center justify-between">
        <a
          className="flex items-center justify-center space-x-2 sm:justify-start"
          href="/"
        >
          <img alt="" className="w-12" src="/logo2.png" />
          <h1 className="from-primary bg-gradient-to-r to-blue-600 bg-clip-text text-3xl font-bold leading-snug text-transparent">
            Tings <span className="text-xs">{packageJson.version}</span>
          </h1>
        </a>

        <ul className="flex items-center space-x-4 md:-mr-4">
          <li>
            <a
              aria-label="npm"
              className="hover:bg-primary inline-block cursor-pointer rounded py-2 hover:text-white md:px-4"
              href="https://www.npmjs.com/package/tings"
            >
              npm
            </a>
          </li>
          <li>
            <a
              aria-label="GitHub repository"
              className="hover:bg-primary inline-block cursor-pointer rounded py-2 hover:text-white md:px-4"
              href="https://github.com/will-stone/tings"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </header>

    <aside className="scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-900 fixed top-20 bottom-5 hidden overflow-y-auto overflow-x-hidden pt-16 md:block md:w-40 lg:w-60">
      <nav className="pb-16">
        <ul className="">
          {t.children.map((ting) => (
            <li key={ting.id}>
              <a
                className="hover:bg-primary block cursor-pointer truncate rounded py-2 px-4 font-medium hover:text-white"
                href={`#${ting.children[0].name}`}
              >
                {ting.children[0].name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>

    <main className="prose prose-lg prose-invert mt-16 pb-32 md:ml-52 lg:ml-72">
      <p className="lead">
        A collection of small JavaScript utilities by{' '}
        <a href="https://wstone.uk/">Will Stone</a>.
      </p>

      <h2>Install</h2>

      <pre>
        {/* @ts-expect-error -- is this type wrong? */}
        <CodeBlock className="language-shell">npm i tings</CodeBlock>
      </pre>

      <h2>Tings</h2>

      {t.children.map((ting) => (
        <Fragment key={ting.id}>
          <h3 className="scroll-mt-28" id={ting.children[0].name}>
            <a href={`#${ting.children[0].name}`}>{ting.children[0].name}</a>
          </h3>
          {ting.children[0].signatures.map((signature) => (
            <Fragment key={signature.id}>
              <ReactMarkdown>{signature.comment.summary[0].text}</ReactMarkdown>
              {signature.comment.blockTags.map((tag) => {
                return (
                  <ReactMarkdown key={tag.tag} components={{ code: CodeBlock }}>
                    {tag.content[0].text}
                  </ReactMarkdown>
                )
              })}
            </Fragment>
          ))}
        </Fragment>
      ))}

      <a
        className="hover:text-primary fixed right-8 bottom-8 flex h-8 w-8 cursor-pointer items-center justify-center truncate rounded bg-gray-800/80 text-xs leading-none text-gray-100 no-underline"
        href="/#top"
      >
        Top
      </a>
    </main>
  </div>
)

export default Index
