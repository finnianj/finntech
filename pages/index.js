import Head from 'next/head';
import Link from 'next/link';
import Plans from '../components/plans';
import OneApp from '../components/one_app';
import BusinessGuide from '../components/business_guide';
import Contact from '../components/contact';
import { getSortedPostsData } from '../lib/posts';

import utilStyles from '../styles/utils.module.css';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export async function getStaticProps() {
  const posts= await getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <>
    <Navbar />

    <Head>
      <Link
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
        rel='stylesheet'
      >
      </Link>
    </Head>


    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <h1>
          Empowering Your Future
        </h1>
        <p className={styles.headerDescription}>
          The digital banking app that revolutionizes the way you manage your finances. Seamlessly access and control your accounts, make secure transactions, and enjoy personalized financial insights, all at your fingertips.
        </p>
        <div className={styles.headerButtons}>
          <div className={utilStyles.blackButton}>
            <Link href='/get_started'>Get Started</Link>
          </div>
          <div className={utilStyles.whiteButton}>
            <Link href='/learn_more'>Learn More</Link>
          </div>
        </div>
      </div>

      <div className={styles.headerRight}>
      </div>

    </header>

    <section className={utilStyles.container}>
      <div className={utilStyles.headingXl}>Banking Made Simple, Smart, and Secure</div>
    </section>

    <section className={utilStyles.container}>
      <Plans />
    </section>

    <OneApp />


    <div className={utilStyles.headingXl}>Visit our Business Guide for Advice and Inspiration</div>


    <section className={utilStyles.container}>
      <BusinessGuide posts={posts}/>
    </section>

    <br></br>
    <br></br>

    <section className={utilStyles.backgroundBlue}>
      <Contact />
    </section>

    <Footer />
    </>
  );
}
