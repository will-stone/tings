import '../styles/index.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { config as fontawesomeConfig } from '@fortawesome/fontawesome-svg-core'
import Head from 'next/head'
import React from 'react'

// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
fontawesomeConfig.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>tings</title>

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
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
