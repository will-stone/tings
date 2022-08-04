import { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

import packageJson from '../../package.json'
import CodeBlock from '../components/code-block'
import t from '../data/typedoc.json'

export const Index = () => (
  <div className="container" id="top">
    <header className="flex h-20 flex-col justify-center border-b border-primary bg-gray-900 md:container md:sticky md:top-0">
      <div className="flex items-center justify-between">
        <a
          className="flex items-center justify-center space-x-2 sm:justify-start"
          href="/"
        >
          <img alt="" className="w-12" src="/logo2.png" />
          <h1 className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-3xl font-bold leading-snug text-transparent">
            Tings <span className="text-xs">{packageJson.version}</span>
          </h1>
        </a>

        <ul className="flex items-center space-x-4 md:-mr-4">
          <li>
            <a
              aria-label="npm"
              className="inline-block cursor-pointer rounded py-2 hover:bg-primary hover:text-white md:px-4"
              href="https://www.npmjs.com/package/tings"
            >
              npm
            </a>
          </li>
          <li>
            <a
              aria-label="GitHub repository"
              className="inline-block cursor-pointer rounded py-2 hover:bg-primary hover:text-white md:px-4"
              href="https://github.com/will-stone/tings"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </header>

    <aside className="fixed top-20 bottom-5 hidden overflow-y-auto pt-16 scrollbar overflow-x-hidden scrollbar-thumb-gray-500 scrollbar-track-gray-900 md:block md:w-40 lg:w-60">
      <nav className="pb-16">
        <ul className="">
          {t.children.map((ting) => (
            <li key={ting.id}>
              <a
                className="block cursor-pointer truncate rounded py-2 px-4 font-medium hover:bg-primary hover:text-white"
                href={`#${ting.name}`}
              >
                {ting.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>

    <main
      // TODO remove this when eslint rule updated - falsely doesn't like prose prose-lg
      // eslint-disable-next-line tailwindcss/no-contradicting-classname
      className="prose-lg prose prose-invert mt-16 pb-32 md:ml-52 lg:ml-72"
    >
      <p className="lead">
        A collection of small JavaScript utilities by{' '}
        <a href="https://wstone.uk/">Will Stone</a>.
      </p>

      <h2>Install</h2>

      <pre>
        <CodeBlock className="language-shell">npm i tings</CodeBlock>
      </pre>

      {t.children.map((ting) => (
        <Fragment key={ting.id}>
          <h2 className="scroll-mt-28" id={ting.name}>
            <a href={`#${ting.name}`}>{ting.name}</a>
          </h2>
          {ting.children[0].signatures.map((signature) => (
            <Fragment key={signature.id}>
              <ReactMarkdown>{signature.comment.summary[0].text}</ReactMarkdown>
              {signature.comment.blockTags.map((tag) => {
                if (tag.tag === 'requires') {
                  return (
                    <p
                      key={tag.tag}
                      className="flex items-center space-x-2 font-bold"
                    >
                      <span className="text-3xl text-yellow-500">⚠</span>
                      <span>Requires {tag.content[0].text}</span>
                    </p>
                  )
                }

                return (
                  <Fragment key={tag.tag}>
                    <h3 className="capitalize">{tag.tag.replace('@', '')}</h3>
                    <ReactMarkdown components={{ code: CodeBlock }}>
                      {tag.content[0].text}
                    </ReactMarkdown>
                  </Fragment>
                )
              })}
            </Fragment>
          ))}
        </Fragment>
      ))}

      <a
        className="fixed right-8 bottom-8 flex h-12 w-12 cursor-pointer items-center justify-center rounded bg-gray-800/80 text-3xl leading-none text-gray-100 no-underline hover:text-primary"
        href="/#top"
      >
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
            fillRule="evenodd"
          />
        </svg>
      </a>
    </main>
  </div>
)
