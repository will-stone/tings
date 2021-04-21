import React from 'react'

export const config = {
  // Remove JS from built output
  // TODO remove eslint comment when feature goes stable
  // eslint-disable-next-line camelcase
  unstable_runtimeJS: false,
}

const FourOhFour = () => {
  return <div>404</div>
}

export default FourOhFour
