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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet"></link>
    </Head>
    <Component {...pageProps} />
  </Fragment>
}

export default MyApp
