import { Fragment } from 'react'
import Head from 'next/head'

import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Fragment>
    <Head>
      <title>Taravann | Portfolio</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="author" content="Taravann Heng" />
      <meta name="description" content="This is my personal portfolio site featuring some of the projects that I've worked on."  />
    </Head>
    <Component {...pageProps} />
  </Fragment>
}

export default MyApp
