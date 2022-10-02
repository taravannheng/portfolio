import { Fragment } from 'react'
import Head from 'next/head'
import Script from 'next/script'

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
    {/* <!-- Google tag (gtag.js) --> */}
    <Script strategy='lazyOnload' async src={`"https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}"`}></Script>
    <Script strategy='lazyOnload' id='google_analytics'>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}');
      `
      }
    </Script>
    <Component {...pageProps} />
  </Fragment>
}

export default MyApp
