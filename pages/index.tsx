import Link from 'next/link';
import Plans from '../components/plans';
import OneApp from '../components/one_app';
import BusinessGuide from '../components/business_guide';
import Contact from '../components/contact';
import { getSortedPostsData } from '../lib/posts';
import { GetStaticProps } from 'next'

import utilStyles from '../styles/utils.module.css';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getSortedPostsData();
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
            <Link href='/pricing'>Get Started</Link>
          </div>
          <div className={utilStyles.whiteButton}>
            <Link href='/guide'>Learn More</Link>
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

    <div className={styles.securityBanner}>
      <h1>Security and Privacy Policy</h1>
      <p>Your Financial Safety is Our Top Priority – Trust in Finntech's Robust Security Measures and Privacy Commitment.</p>
      <div className={utilStyles.whiteButton}>
        <Link href='/security'>Learn More</Link>
      </div>
    </div>


    <section className={utilStyles.backgroundBlue}>
      <Contact />
    </section>



    <Footer />
    </>
  );
}
