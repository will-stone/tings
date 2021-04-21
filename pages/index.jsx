import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faNpm } from '@fortawesome/free-brands-svg-icons/faNpm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import ReactMarkdownWithHtml from 'react-markdown/with-html'

import CodeBlock from '../components/code-block'
import * as readme from '../README.md'
import t from '../typedoc.json'

export const config = {
  // Remove JS from built output
  // TODO remove eslint comment when feature goes stable
  // eslint-disable-next-line camelcase
  unstable_runtimeJS: false,
}

const Index = () => {
  return (
    <div className="flex-grow flex h-full overflow-hidden">
      <div className="hidden md:block flex-shrink-0 w-64 border-r overflow-y-auto">
        <div className="p-8">
          <ul className="">
            {t.children.map((ting) => (
              <li key={ting.id}>
                <a
                  className="block font-medium px-4 py-2 hover:bg-peep rounded cursor-pointer"
                  href={`#${ting.name}`}
                >
                  {ting.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-grow overflow-y-auto">
        <div className="px-8 pb-8 prose prose-lg max-w-none">
          <ReactMarkdownWithHtml
            escapeHtml={false}
            renderers={{ code: CodeBlock }}
            source={readme.default}
          />

          {t.children.map((ting) => (
            <Fragment key={ting.id}>
              <hr />

              <h2 id={ting.name}>
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
                        <h3>{tag.tag}</h3>
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
        </div>
      </div>
      <div className="hidden lg:block flex-shrink-0 w-64 border-l overflow-y-auto">
        <div className="py-8 px-4 flex flex-col justify-between min-h-full">
          <ul className="space-y-4">
            <li>
              <a
                className="flex items-center space-x-2 hover:bg-peep px-4 py-2 rounded cursor-pointer"
                href="https://www.npmjs.com/package/tings"
              >
                <FontAwesomeIcon fixedWidth icon={faNpm} size="2x" />
                <span className="text-cerise font-bold">Package</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center space-x-2 hover:bg-peep px-4 py-2 rounded cursor-pointer"
                href="https://github.com/will-stone/tings"
              >
                <FontAwesomeIcon fixedWidth icon={faGithub} size="2x" />
                <span className="text-cerise font-bold">Source Code</span>
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <a
                className="flex items-center space-x-2 hover:bg-peep px-4 py-2 rounded cursor-pointer"
                href="https://wstone.io"
              >
                <span
                  className="inline-flex justify-center"
                  style={{ width: '40px', height: '32px' }}
                >
                  <img alt="" className="max-h-full" src="/me.png" />
                </span>
                <span className="font-bold">
                  By <span className="text-cerise">Will Stone</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Index
