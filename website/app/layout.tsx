import 'tailwindcss/tailwind.css'

import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <title>Tings</title>

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
      </head>
      <body className="bg-gray-900 text-gray-300">{children}</body>
    </html>
  )
}

export default RootLayout
