import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';

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
  const imageURL = `/images/authors/${postData.author}.png`
  return (
    <>
      <Navbar />
        <Layout>
          <Head>
            <title>{postData.title}</title>
          </Head>

          <article>
            <div className={utilStyles.author}>
              <Image
                priority
                src={imageURL}
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
              <h2 className={utilStyles.authorName}>{postData.author}</h2>
              <p className={utilStyles.authorRole}><em>{postData.role}</em></p>
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
