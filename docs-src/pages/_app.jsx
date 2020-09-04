import '../styles/index.css'

import React from 'react'

function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />
}

export default MyApp
