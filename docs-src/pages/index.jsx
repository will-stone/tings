import React from 'react'

import typeDocument from '../.data/typedoc.json'

export const config = {
  // Remove JS from built output
  // TODO remove eslint comment when feature goes stable
  // eslint-disable-next-line camelcase
  unstable_runtimeJS: false,
}

const Index = () => {
  return (
    <div>
      <img alt="tings" src="/logo2.png" />
      hello!
      {typeDocument.name}
    </div>
  )
}

export default Index
