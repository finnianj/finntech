import utilStyles from '../styles/utils.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/navbar'
import Footer from '../components/footer';
import Layout from '../components/layout'
import Link from 'next/link';

export default function Thanks() {
  return (
    <>
      <Head>
      <title>Finntech - Thanks!</title>
      </Head>
      <Navbar />
      <Layout>
        <article>

          <h1 className={utilStyles.headingXl}>That's all there is!</h1>

          <div className={utilStyles.articleText}>
            <p>
              Sadly, this site is only for development purposes and I am not really the CEO of a large international bank.
            </p>
            <p>
              It was built as an experiment in order for me to explore the wonderful world of <a href="" className={`${utilStyles.blueText} ${utilStyles.noUnderline}`}>Next.js</a>, as well as to practice using <a href="" className={`${utilStyles.blueText} ${utilStyles.noUnderline}`}>React</a> and <a href="" className={`${utilStyles.blueText} ${utilStyles.noUnderline}`}>Typescript</a>.
            </p>
            <h3>
              Thank you for visiting!
            </h3>

            <br></br>
            <br></br>
            <br></br>

              <div className={utilStyles.author}>
                <Image
                  priority
                  src={'/images/authors/Finn.png'}
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt=""
                />
                <h2 className={utilStyles.authorName}>Finn</h2>
                <p className={utilStyles.authorRole}><em>Web Developer</em></p>
                <br></br>
                <p className={utilStyles.authorRole}>
                  <em>If you are interested, you can see my 3D portfolio <Link href="https://www.finnianj.live" className={utilStyles.blueText}>here</Link>.</em>
                </p>
              </div>

              </div>
            </article>

      </Layout>
      <Footer />
    </>
  )
}
