import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

import packageJson from '../../package/package.json'
import t from '../data/typedoc.json'
// eslint-disable-next-line import/extensions
import { CodeBlock } from './components/code-block'

type Ting = {
  id: number
  name: string
  signatures: unknown
  summary: string
  code: string
  slug: string
}

const byCategory: Record<string, Ting[]> = {}

for (const ting of t.children) {
  const { name, id, signatures } = ting.children[0]
  const summary = signatures[0].comment.summary[0].text
  const code = signatures[0].comment.blockTags[0].content[0].text
  const category = ting.groups[0].categories[0].title

  const details = {
    code,
    id,
    name,
    signatures,
    slug: ting.name,
    summary,
  }

  if (byCategory[category]) {
    byCategory[category].push(details)
  } else {
    byCategory[category] = [details]
  }
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tings</title>
      </Head>

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

        <aside className="fixed bottom-5 top-20 hidden overflow-y-auto overflow-x-hidden pt-16 scrollbar scrollbar-track-gray-900 scrollbar-thumb-gray-500 md:block md:w-40 lg:w-60">
          <nav className="space-y-8 pb-16">
            {Object.entries(byCategory)
              .sort()
              .map(([category, tings]) => (
                <div key={category}>
                  <h2 className="text-gray-500">{category}</h2>
                  {tings.map((ting) => (
                    <ul key={ting.id}>
                      <li>
                        <a
                          className="block cursor-pointer truncate rounded px-4 py-2 font-medium hover:bg-primary hover:text-white"
                          href={`#${ting.name}`}
                        >
                          {ting.name}
                        </a>
                      </li>
                    </ul>
                  ))}
                </div>
              ))}
          </nav>
        </aside>

        <main className="prose prose-lg prose-invert mt-16 pb-32 md:ml-52 lg:ml-72">
          <p className="lead">
            A collection of small JavaScript utilities by{' '}
            <a href="https://wstone.uk/">Will Stone</a>.
          </p>

          <h2>Library Rules</h2>

          <ul>
            <li>Zero dependencies.</li>
            <li>Never throw.</li>
            <li>Never assume anything about input value(s).</li>
            <li>Always return a sensible default.</li>
          </ul>

          <h3>Naming</h3>

          <table>
            <thead>
              <tr>
                <th>Prefix</th>
                <th>Condition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>check</code>
                </td>
                <td>Returns a boolean</td>
              </tr>
              <tr>
                <td>
                  <code>generate</code>
                </td>
                <td>Returns new data</td>
              </tr>
              <tr>
                <td>
                  <code>to</code>
                </td>
                <td>Returns coerced input</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <small>
                    Functions that do not return data do not have a prefix.
                  </small>
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            This allows for comfortable variable naming without clashes, for
            example:
          </p>

          <ReactMarkdown components={{ code: CodeBlock }}>
            {`\`\`\`js
const isUnique = checkUnique([1, 2, 3])
\`\`\`
`}
          </ReactMarkdown>

          <h2>Install</h2>

          <pre>
            {/* @ts-expect-error -- is this type wrong? */}
            <CodeBlock className="language-shell">npm i tings</CodeBlock>
          </pre>

          {Object.entries(byCategory)
            .sort()
            .map(([category, tings]) => (
              <Fragment key={category}>
                {tings.map((ting) => (
                  <Fragment key={ting.id}>
                    <h2 className="scroll-mt-28" id={ting.name}>
                      <a href={`#${ting.name}`}>{ting.name}</a>
                      <span
                        aria-label={`in ${category} category`}
                        className="ml-4 rounded bg-primary px-2 py-1 text-xs"
                        role="presentation"
                      >
                        {category}
                      </span>
                    </h2>
                    <ReactMarkdown>{ting.summary}</ReactMarkdown>
                    <ReactMarkdown components={{ code: CodeBlock }}>
                      {ting.code}
                    </ReactMarkdown>
                    <p className="text-gray-300">
                      Source:{' '}
                      <a
                        className="text-gray-300"
                        href={`https://github.com/will-stone/tings/blob/main/package/source/${ting.slug}.ts`}
                      >
                        {ting.slug}.ts
                      </a>
                    </p>
                  </Fragment>
                ))}
              </Fragment>
            ))}

          <a
            className="fixed bottom-8 right-8 flex h-8 w-8 cursor-pointer items-center justify-center truncate rounded bg-gray-800/80 text-xs leading-none text-gray-100 no-underline hover:text-primary"
            href="/#top"
          >
            Top
          </a>
        </main>
      </div>
    </>
  )
}

export default Home
