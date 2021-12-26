import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faNpm } from '@fortawesome/free-brands-svg-icons/faNpm'
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons/faChevronCircleUp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

import CodeBlock from '../components/code-block'
import packageJson from '../package.json'
import t from '../typedoc.json'

export const config = {
  // Remove JS from built output
  // TODO remove eslint comment when feature goes stable
  // eslint-disable-next-line camelcase
  unstable_runtimeJS: false,
}

const Index = () => (
  <div className="container" id="top">
    <header className="md:container flex md:sticky md:top-0 flex-col justify-center h-20 bg-gray-900 border-b border-primary">
      <div className="flex justify-between items-center">
        <Link href="/">
          <a className="flex justify-center sm:justify-start items-center space-x-2">
            <img alt="" className="w-12" src="/logo2.png" />
            <h1 className="text-3xl font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              Tings <span className="text-xs">{packageJson.version}</span>
            </h1>
          </a>
        </Link>

        <ul className="flex items-center md:-mr-4 space-x-4">
          <li>
            <a
              aria-label="npm"
              className="inline-block py-2 md:px-4 hover:text-white hover:bg-primary rounded cursor-pointer"
              href="https://www.npmjs.com/package/tings"
            >
              <FontAwesomeIcon fixedWidth icon={faNpm} size="2x" />
            </a>
          </li>
          <li>
            <a
              aria-label="GitHub repository"
              className="inline-block py-2 md:px-4 hover:text-white hover:bg-primary rounded cursor-pointer"
              href="https://github.com/will-stone/tings"
            >
              <FontAwesomeIcon fixedWidth icon={faGithub} size="2x" />
            </a>
          </li>
        </ul>
      </div>
    </header>

    <aside className="hidden md:block overflow-x-hidden overflow-y-auto fixed top-20 bottom-5 pt-16 md:w-40 lg:w-60 scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-900">
      <nav className="pb-16">
        <ul className="">
          {t.children.map((ting) => (
            <li key={ting.id}>
              <a
                className="block py-2 px-4 font-medium hover:text-white truncate hover:bg-primary rounded cursor-pointer"
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
      className="pb-32 mt-16 md:ml-52 lg:ml-72 prose prose-lg prose-invert"
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
              <ReactMarkdown>{signature.comment.shortText}</ReactMarkdown>
              {signature.comment.tags.map((tag) => {
                if (tag.tag === 'requires') {
                  return (
                    <p
                      key={tag.tag}
                      className="flex items-center space-x-2 font-bold"
                    >
                      <span className="text-3xl text-yellow-500">⚠</span>
                      <span>Requires {tag.text}</span>
                    </p>
                  )
                }

                return (
                  <Fragment key={tag.tag}>
                    <h3>
                      {tag.tag.replace(/^(.)|\s+(.)/gu, (c) => c.toUpperCase())}
                    </h3>
                    <ReactMarkdown components={{ code: CodeBlock }}>
                      {tag.text}
                    </ReactMarkdown>
                  </Fragment>
                )
              })}
            </Fragment>
          ))}
        </Fragment>
      ))}

      <a
        className="fixed right-8 bottom-8 text-gray-600 hover:text-primary truncate rounded cursor-pointer"
        href="/#top"
      >
        <FontAwesomeIcon fixedWidth icon={faChevronCircleUp} size="2x" />
      </a>
    </main>
  </div>
)

export default Index
