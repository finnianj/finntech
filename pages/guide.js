import Head from 'next/head';
import Link from 'next/link';
import BusinessGuide from '../components/businessGuide';
import Navbar from '../components/navbar';

import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout';

export async function getStaticProps() {
  const posts= await getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}

export default function Guide({ posts }) {
  return (
    <>
      <Navbar />
      <Layout size={'60rem'}>

        <section className={utilStyles.container}>
          <div className={utilStyles.headingXl}>Explore Our Expert Advice</div>
          <p className={`${utilStyles.lightText} ${utilStyles.articleText}`}>
            Welcome to the Finntech Business Guide, your ultimate resource for navigating the world of finance and business. At Finntech, we take pride in providing valuable insights and expert advice to empower entrepreneurs and businesses on their path to success.
          </p>
          <p className={`${utilStyles.lightText} ${utilStyles.articleText}`}>
            What sets our Business Guide apart is that all the articles here are thoughtfully crafted by our dedicated team of knowledgeable employees, each with a wealth of expertise in various financial domains. From essential financial terminology to growth strategies and industry trends, our employee-authored posts offer trusted and reliable guidance, ensuring you make informed decisions for your financial journey.
          </p>

          <br></br>
        </section>

        <section className={utilStyles.container}>
          <BusinessGuide posts={posts} />
        </section>

      </Layout>
    </>
  )
}
