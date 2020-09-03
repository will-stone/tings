import React from 'react'

import t from '../.data/typedoc.json'

export const config = {
  // Remove JS from built output
  // TODO remove eslint comment when feature goes stable
  // eslint-disable-next-line camelcase
  unstable_runtimeJS: false,
}

const Index = () => {
  return (
    <div className="text-blue-400">
      <img alt="tings" src="/logo2.png" />
      <h1>{t.name}</h1>
      {t.children.map((ting) => (
        <h2 key={ting.id}>{ting.name}</h2>
      ))}
    </div>
  )
}

export default Index
