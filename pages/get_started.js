import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Contact from '../components/contact';
import Layout from '../components/layout';

export default function GetStarted() {
  return (
    <>
      <Head>
        <title>Finntech - Get Started</title>
        <meta property="og:image" content="/images/og.png" />

      </Head>
      <Navbar />
      <Layout size={'80rem'}>
      <Contact />

      </Layout>

      <Footer />
    </>
  )
}
