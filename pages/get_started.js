import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

import Contact from '../components/contact';

import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout';

export default function GetStarted() {
  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <Contact />
      <Footer />
    </>
  )
}
