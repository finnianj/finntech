import Head from 'next/head';
import Link from 'next/link';
import BusinessGuide from '../components/businessGuide';
import Navbar from '../components/navbar';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';

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
      <div className={utilStyles.padding}></div>
      <section className={utilStyles.container}>
        <div className={utilStyles.headingXl}>Explore Our Expert Advice</div>
      </section>

      <section className={utilStyles.container}>
        <BusinessGuide posts={posts} />
      </section>
      <div className={utilStyles.padding}></div>

    </>
  )
}
