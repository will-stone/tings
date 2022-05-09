import { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

import packageJson from '../../package.json'
import CodeBlock from '../components/code-block'
import t from '../data/typedoc.json'

export const Index = () => (
  <html className="scroll-smooth" lang="en">
    <head>
      <title>Tings</title>

      <link
        href="/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link href="/site.webmanifest" rel="manifest" />
      <link color="#cb1b71" href="/safari-pinned-tab.svg" rel="mask-icon" />
      <meta content="#ffffff" name="msapplication-TileColor" />
      <meta content="#ffffff" name="theme-color" />

      <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
    </head>
    <body className="text-gray-300 bg-gray-900">
      <div className="container" id="top">
        <header className="flex flex-col justify-center h-20 bg-gray-900 border-b border-primary md:container md:sticky md:top-0">
          <div className="flex justify-between items-center">
            <a
              className="flex justify-center items-center space-x-2 sm:justify-start"
              href="/"
            >
              <img alt="" className="w-12" src="/logo2.png" />
              <h1 className="text-3xl font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Tings <span className="text-xs">{packageJson.version}</span>
              </h1>
            </a>

            <ul className="flex items-center space-x-4 md:-mr-4">
              <li>
                <a
                  aria-label="npm"
                  className="inline-block py-2 hover:text-white hover:bg-primary rounded cursor-pointer md:px-4"
                  href="https://www.npmjs.com/package/tings"
                >
                  npm
                </a>
              </li>
              <li>
                <a
                  aria-label="GitHub repository"
                  className="inline-block py-2 hover:text-white hover:bg-primary rounded cursor-pointer md:px-4"
                  href="https://github.com/will-stone/tings"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </header>

        <aside className="hidden overflow-x-hidden overflow-y-auto fixed top-20 bottom-5 pt-16 md:block md:w-40 lg:w-60 scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-900">
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
          className="pb-32 mt-16 prose prose-lg prose-invert md:ml-52 lg:ml-72"
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
                          {tag.tag.replace(/^(.)|\s+(.)/gu, (c) =>
                            c.toUpperCase(),
                          )}
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
            className="flex fixed right-8 bottom-8 justify-center items-center w-12 h-12 text-3xl leading-none text-gray-100 hover:text-primary no-underline truncate bg-gray-800/80 rounded cursor-pointer"
            href="/#top"
          >
            ↑
          </a>
        </main>
      </div>
    </body>
  </html>
)