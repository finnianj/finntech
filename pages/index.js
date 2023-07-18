import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
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
          Finntech, the innovative digital banking app that revolutionizes the way you manage your finances. Seamlessly access and control your accounts, make secure transactions, and enjoy personalized financial insights, all at your fingertips.
        </p>
        <div className={styles.headerButtons}>
          <div className={utilStyles.blackButton}>
            <Link href=''>Get Started</Link>
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
      <div className={styles.card}>
        <h3>Standard</h3>
        <p>
        The Standard Account is your all-inclusive solution for everyday banking needs. With secure mobile and online banking, instant fund transfers, a globally accepted debit card, and round-the-clock customer support, managing your finances has never been easier.
        </p>
        <ul>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>Secure mobile and online banking</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>Globally acceted debit card</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>Temporary Virtual until Physical arrives</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>24/7 customer support</li>
        </ul>
        <div className={styles.cardLower}>
          <div className={styles.cardFees}>
            <h5>€0</h5>
            <p><em>Monthly maintenance fee</em></p>
          </div>
          <div className={styles.cardFees}>
            <h5>€0</h5>
            <p><em>Standard transfer fee</em></p>
          </div>
          <div className={styles.cardFees}>
            <h5>€0</h5>
            <p><em>ATM withdrawal fee at partner networks</em></p>
          </div>
          <div className={styles.cardFees}>
            <h5>2%</h5>
            <p><em>Foreign transaction fee</em></p>
          </div>
        </div>
      </div>


      <div className={styles.card}>
        <h3>Premium</h3>
        <p>
        Elevate your banking experience with our Premium Account, offering exclusive benefits and personalized services to align with your financial goals. Enjoy priority customer support, higher daily transaction limits, personalized financial planning assistance, and access to a premium rewards program, all designed to enhance your financial well-being.
        </p>
        <ul>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>Priority customer support</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>Higher daily transaction limits</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>Personalised financial planning assistance</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>Access to Premium Rewards program</li>
        </ul>
        <div className={styles.cardLower}>
          <div className={styles.cardFees}>
            <h5>€9.99</h5>
            <p><em>Monthly maintenance fee</em></p>
          </div>
          <div className={styles.cardFees}>
            <h5>€0</h5>
            <p><em>For premium fund transfers</em></p>
          </div>
          <div className={styles.cardFees}>
            <h5>€0</h5>
            <p><em>ATM withdrawal fee wordlwide</em></p>
          </div>
          <div className={styles.cardFees}>
            <h5>1%</h5>
            <p><em>Foreign transaction fee</em></p>
          </div>
        </div>
      </div>
    </section>

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
