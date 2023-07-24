import Head from 'next/head';
import Image from 'next/image';
import Plans from '../components/plans';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout';



export default function Pricing() {
  return (
    <>
      <Head>
        <title>Finntech - Pricing</title>
        <meta property="og:image" content="/images/og.png" />
      </Head>

      <Navbar />
      <Layout size={'60rem'}>
        <div className={utilStyles.author}>
          <Image
            priority
            src={"/images/authors/Maria.png"}
            className={utilStyles.borderCircle}
            height={108}
            width={108}
            alt=""
          />
          <h2 className={utilStyles.authorName}>Maria</h2>
          <p className={utilStyles.authorRole}><em>Global Head of Accounts</em></p>
        </div>


        <section className={utilStyles.container}>
          <div className={utilStyles.headingXl}>Pricing and Plans</div>
          <p className={`${utilStyles.lightText} ${utilStyles.articleText}`}>
            Welcome to Finntech's Pricing and Plans page, where we offer a range of tailored account options to suit your unique financial needs. Explore our three distinct account tiers: Standard, Premium, and Business, each designed to provide you with the perfect balance of features and benefits.
          </p>
          <p className={`${utilStyles.lightText} ${utilStyles.articleText}`}>
            With our <span className={utilStyles.blueText}>Standard Account</span>, experience the core essentials for your everyday banking. Enjoy seamless fund transfers, convenient bill payments, and access to our intuitive mobile app—all backed by top-notch security measures to protect your financial transactions.
          </p>
          <p className={`${utilStyles.lightText} ${utilStyles.articleText}`}>
            For those seeking an elevated banking experience, our <span className={utilStyles.blueText}>Premium Account</span> delivers exclusive benefits and personalized services. Unlock priority customer support, higher transaction limits, and personalized financial planning assistance, allowing you to reach your financial goals with confidence.
          </p>
          <p className={`${utilStyles.lightText} ${utilStyles.articleText}`}>
            Business owners can take advantage of our feature-rich <span className={utilStyles.blueText}>Business Account</span>, designed to empower enterprises of all sizes. Benefit from multi-user access, global transaction capabilities, and specialized financial tools to streamline your operations and drive growth.
          </p>

          <br></br>
        </section>

        <section className={utilStyles.container}>
          <Plans />
          <p className={`${utilStyles.lightText} ${utilStyles.articleText}`}>
          At Finntech, we believe in providing flexible and robust account options to cater to individuals, families, and businesses alike. Choose the plan that aligns with your aspirations, and let us accompany you on your financial journey.
          </p>
        </section>
      </Layout>
      <Footer />
    </>
  )
}
