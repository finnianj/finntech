import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';

const name = 'Finn, CEO';


export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <>
      <Navbar />
        <Layout>
          <Head>
            <title>{postData.title}</title>
          </Head>
          <article>
            <div className={utilStyles.finn}>
              <Image
                priority
                src="/images/profile.png"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
              <h2 className={utilStyles.headingLg}>
              <div href="/" className={utilStyles.colorInherit}>
                {name}
              </div>
            </h2>
            </div>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
              <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} className={utilStyles.articleText} />
          </article>
        </Layout>
    </>

  );
}
