import { Head, Html, Main, NextScript } from 'next/document'

function MyDocument(): JSX.Element {
  return (
    <Html lang="en">
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <meta charSet="utf8" />

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

      <body className="bg-gray-900 text-gray-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
