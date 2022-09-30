import { Fragment } from 'react'
import Head from 'next/head'

import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Fragment>
    <Head>
      <title>Taravann | Portfolio</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Component {...pageProps} />
  </Fragment>
}

export default MyApp
