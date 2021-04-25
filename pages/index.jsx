import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faNpm } from '@fortawesome/free-brands-svg-icons/faNpm'
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
  <div className="container">
    <header className="md:container bg-gray-900 md:fixed top-0 left-0 right-0 border-b border-primary h-20 flex flex-col justify-center">
      <div className="flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center justify-center sm:justify-start space-x-2">
            <img alt="" className="w-12" src="/logo2.png" />
            <h1 className="text-3xl leading-snug font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              Tings <span className="text-xs">{packageJson.version}</span>
            </h1>
          </a>
        </Link>

        <ul className="flex items-center space-x-4 md:-mr-4">
          <li>
            <a
              aria-label="npm"
              className="inline-block hover:bg-primary hover:text-white md:px-4 py-2 rounded cursor-pointer"
              href="https://www.npmjs.com/package/tings"
            >
              <FontAwesomeIcon fixedWidth icon={faNpm} size="2x" />
            </a>
          </li>
          <li>
            <a
              aria-label="GitHub repository"
              className="inline-block hover:bg-primary hover:text-white md:px-4 py-2 rounded cursor-pointer"
              href="https://github.com/will-stone/tings"
            >
              <FontAwesomeIcon fixedWidth icon={faGithub} size="2x" />
            </a>
          </li>
        </ul>
      </div>
    </header>

    <aside className="hidden md:block md:w-40 lg:w-60 overflow-x-hidden overflow-y-auto fixed top-20 pt-16 bottom-5 scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-900">
      <nav className="pb-16">
        <ul className="">
          {t.children.map((ting) => (
            <li key={ting.id}>
              <a
                className="block font-medium px-4 py-2 hover:bg-primary hover:text-white rounded cursor-pointer truncate"
                href={`#${ting.name}`}
              >
                {ting.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>

    <main className="prose prose-lg md:ml-52 lg:ml-72 mt-8 md:mt-36 pb-32">
      <p className="lead">
        A collection of small JavaScript utilities by{' '}
        <a href="https://wstone.io/">Will Stone</a>.
      </p>

      <h2>Install</h2>

      <CodeBlock language="shell" value="npm i tings" />

      {t.children.map((ting) => (
        <Fragment key={ting.id}>
          <h2 className="pt-40 !-mt-40" id={ting.name}>
            <a href={`#${ting.name}`}>{ting.name}</a>
          </h2>
          {ting.children[0].signatures.map((signature) => (
            <Fragment key={signature.id}>
              <ReactMarkdown source={signature.comment.shortText} />
              {signature.comment.tags.map((tag) => {
                if (tag.tag === 'requires') {
                  return (
                    <p
                      key={tag.tag}
                      className="flex items-center space-x-2 font-bold"
                    >
                      <span className="text-yellow-500 text-3xl">⚠</span>
                      <span>Requires {tag.text}</span>
                    </p>
                  )
                }

                return (
                  <Fragment key={tag.tag}>
                    <h3>
                      {tag.tag.replace(/^(.)|\s+(.)/gu, (c) => c.toUpperCase())}
                    </h3>
                    <ReactMarkdown
                      renderers={{ code: CodeBlock }}
                      source={tag.text}
                    />
                  </Fragment>
                )
              })}
            </Fragment>
          ))}
        </Fragment>
      ))}
    </main>
  </div>
)

export default Index
