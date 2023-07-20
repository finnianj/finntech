import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Contact from '../components/contact';

export default function GetStarted() {
  return (
    <>
      <Head>
        <title>Finntech - Get Started</title>
      </Head>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <Contact />
      <Footer />
    </>
  )
}
