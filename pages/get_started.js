import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar';
import Contact from '../components/contact';

import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout';

export default function GetStarted() {
  return (
    <>
      <Navbar />
      <Layout size={'60rem'}>
        <Contact />
      </Layout>
    </>
  )
}
