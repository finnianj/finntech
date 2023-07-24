import Head from 'next/head';

import '../styles/global.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export default function App({ Component, pageProps }){
  return (
    <>
      <Head>
        <title>Finntech</title>
        <meta property="og:image" content="/images/og.png" />
        <meta property="og:title" content="Finntech" />
        <meta property="og:description" content="Empowering Your Future" />
      </Head>
      <Component {...pageProps}/>
    </>
  )
}
