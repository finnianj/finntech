import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Plans from '../components/plans';
import AppStore from '../components/app_store';
import BusinessGuide from '../components/business_guide';
import Contact from '../components/contact';
import { getSortedPostsData } from '../lib/posts';

import utilStyles from '../styles/utils.module.css';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';

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
            <Link href=''>Learn More</Link>
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

    <AppStore />


    <div className={utilStyles.headingXl}>Visit our Business Guide for Advice and Inspiration</div>


    <section className={utilStyles.container}>
      <BusinessGuide posts={posts}/>
    </section>

    <br></br>
    <br></br>

    <Contact />


      <p>



Why Choose Finntech?

Streamlined Solutions for Financial Success

Discover the power of Finntech and unlock a world of possibilities for your financial journey. With our user-friendly platform and comprehensive suite of services, we make it easier than ever to take control of your finances. From personalized banking solutions to tailored investment strategies, we have everything you need to make informed decisions and secure a brighter financial future.

Key Features and Benefits:

Seamless Personal Banking: Enjoy hassle-free banking with our intuitive interface, enabling you to manage your accounts, transfer funds, pay bills, and track expenses effortlessly.

Business Solutions: Fuel the growth of your business with our range of specialized services, including business loans, merchant accounts, and cash management tools, all designed to enhance your operations and drive success.

Investment Management: Grow your wealth with confidence using our innovative investment tools and expert guidance. Whether you're a seasoned investor or just starting out, we have the resources to help you build a robust portfolio.

Financial Planning: Take the guesswork out of financial planning with our comprehensive tools and personalized advice. We'll assist you in setting realistic goals, creating budgets, and developing a roadmap to achieve your dreams.

Join the Finntech Community Today

Ready to experience the future of finance? Sign up for a free account and discover the endless possibilities that Finntech has to offer. Our dedicated team of financial experts is here to support you, providing unparalleled customer service and guidance along your financial journey. Don't miss out — start your adventure with Finntech today.
      </p>


    </>
  );
}
