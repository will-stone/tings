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
      <div className="flex-shrink-0 px-8 py-4 border-b">
        <a className="inline-flex items-center" href="/">
          <img alt="tings" className="w-20 h-20 mr-4" src="/logo2.png" />
          <h1 className="text-3xl font-bold leading-tight text-cerise">
            {t.name}
          </h1>
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
              </Fragment>
            ))}
          </div>
        </div>
        <div className="hidden lg:block flex-shrink-0 w-64 border-l overflow-y-auto">
          <div className="p-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum faucibus lacus est. Pellentesque ac enim nisl. Proin
              eget neque convallis, egestas risus eu, bibendum magna. Morbi
              ultricies, ex vitae facilisis posuere, eros odio fringilla mauris,
              sit amet lacinia purus elit consequat orci. Nunc consequat quam
              purus, id convallis urna condimentum at. Fusce id mollis tortor.
              Nullam semper magna vel sapien faucibus auctor. Etiam eget dui
              vitae metus interdum tempus ut a velit. Nulla efficitur magna a
              metus fermentum posuere. Suspendisse potenti. Phasellus
              consectetur sem tortor, a tincidunt arcu placerat non. Maecenas
              interdum sit amet neque in cursus. Mauris mi nulla, hendrerit in
              placerat sed, mollis sit amet arcu. Ut sit amet metus quam. Morbi
              vulputate quam vitae libero varius dictum. Maecenas in porta nibh.
              Aenean sed leo non magna accumsan dignissim et in nulla. Aenean
              eleifend fermentum risus, sit amet pulvinar velit pulvinar
              vulputate. In et leo neque. Phasellus placerat metus at ex
              dignissim euismod. Morbi gravida turpis a ullamcorper bibendum.
              Nullam neque ipsum, tempor nec euismod eget, congue sed erat.
              Nulla pretium orci tortor, a gravida quam fringilla et. Donec id
              magna massa. Nullam aliquet urna eros, a tempus ligula rhoncus ut.
              Pellentesque semper, mi eget fermentum molestie, nisl mauris
              porttitor nisl, vitae iaculis odio urna id nulla. Nulla
              consectetur ultricies posuere. Integer a imperdiet diam. Duis
              scelerisque elit at dapibus congue. Praesent venenatis neque quis
              enim aliquet consectetur. In dignissim mattis urna, a convallis
              nunc laoreet in. Sed mollis nec ligula quis sollicitudin. Aenean
              massa dolor, fringilla ut urna eu, porttitor tincidunt neque.
              Nulla facilisi. Suspendisse in leo pellentesque, facilisis lorem
              non, convallis ante. Maecenas volutpat vestibulum leo, ac dapibus
              erat dapibus ut. Cras aliquet scelerisque metus eu gravida. Duis
              in pellentesque magna. Fusce sit amet massa et metus rhoncus
              pulvinar. Fusce sed urna vitae lorem egestas cursus blandit ut
              lacus. Aenean ex ante, dapibus ut justo at, ullamcorper lobortis
              massa. Sed tincidunt vel enim id dapibus. Aliquam sed finibus
              nibh, nec ultrices tortor. Nunc vel turpis id purus mollis
              posuere. In ultrices dapibus justo quis aliquam. Proin vitae
              libero enim. Nulla sed sagittis augue, in fermentum ligula. Nunc
              dignissim lorem et ante semper efficitur. Morbi consequat, nisi
              cursus malesuada accumsan, lacus augue venenatis nibh, eu varius
              dolor eros non metus. Vivamus lacinia neque magna, at tempor nisi
              vehicula a. Nunc commodo neque sed odio maximus, ut ornare eros
              venenatis. Nulla facilisi. In hendrerit quam porttitor turpis
              bibendum rutrum. Curabitur nisl magna, tempor sit amet elit quis,
              egestas viverra tellus. Curabitur consectetur justo vel feugiat
              tincidunt. Donec sed turpis vestibulum augue laoreet molestie
              consequat et odio. Sed mattis mauris orci, sollicitudin porta mi
              iaculis sit amet. Maecenas varius vitae elit eget euismod. Duis
              sollicitudin, massa ut volutpat consectetur, felis odio vulputate
              turpis, ac eleifend ipsum tellus viverra purus. Morbi fringilla
              dolor at condimentum congue. Donec sollicitudin tortor nibh, a
              fermentum eros blandit et. Phasellus eget euismod mauris.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
