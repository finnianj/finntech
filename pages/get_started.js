import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Contact from '../components/contact';

export default function GetStarted() {
  return (
    <>
      <Head></Head>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <Contact />
      <Footer />
    </>
  )
}
