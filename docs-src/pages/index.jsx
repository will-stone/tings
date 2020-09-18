import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

import t from '../.data/typedoc.json'
import CodeBlock from '../components/code-block'

export const config = {
  // Remove JS from built output
  // TODO remove eslint comment when feature goes stable
  // eslint-disable-next-line camelcase
  unstable_runtimeJS: false,
}

const Index = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-shrink-0 px-8 py-4 border-b flex justify-between items-center">
        <a className="inline-flex items-center" href="/">
          <img alt="tings" className="w-12 h-12 mr-4" src="/logo2.png" />
          <h1 className="text-2xl font-bold leading-tight text-cerise">
            {t.name}
          </h1>
        </a>

        <a href="https://github.com/will-stone/tings">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <div className="flex-grow flex overflow-hidden">
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
          <div className="p-8 prose">
            {t.children.map((ting) => (
              <Fragment key={ting.id}>
                <h2 id={ting.name}>
                  <a href={`#${ting.name}`}>{ting.name}</a>
                </h2>
                {ting.signatures.map((signature) => (
                  <Fragment key={signature.id}>
                    <ReactMarkdown source={signature.comment.shortText} />
                    {signature.comment.tags.map((tag) => {
                      if (tag.tag === 'requires') {
                        return (
                          <h3
                            key={tag.tag}
                            className="flex items-center space-x-2"
                          >
                            <span className="text-yellow-500 text-3xl">⚠</span>
                            <span>Requires {tag.text}</span>
                          </h3>
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
                <hr />
              </Fragment>
            ))}
          </div>
        </div>
        <div className="hidden lg:block flex-shrink-0 w-64 border-l overflow-y-auto">
          <div className="p-8">
            <p>By Will Stone</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
