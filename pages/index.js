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
          We are committed to revolutionizing the way you manage your finances. Our cutting-edge platform offers a wide range of financial services designed to simplify your life and help you achieve your goals.
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
      <div className={utilStyles.headingXl}>Streamlined Solutions for Financial Success</div>
    </section>
    <section className={utilStyles.container}>
      <div className={styles.card}>
        <h3>Standard</h3>
        <p>
          The Finntech Standard Account offers essential banking features for everyday financial needs. With this account, users can enjoy convenient access to their funds, perform basic transactions, and manage their finances through a user-friendly mobile app.
        </p>
        <ul>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>On-demand Issuing</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>Push Provisioning for Digital Payments</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>Temporary Virtual until Physical arrives</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>KYC included</li>
        </ul>
      </div>


      <div className={styles.card}>
        <h3>Premium</h3>
        <p>
        Elevate your banking experience with the Finntech Premium Account. Designed for discerning customers, this account provides a range of exclusive benefits, including personalized financial advice, enhanced security features, priority customer support, and access to premium rewards and discounts.
        </p>
        <ul>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>On-demand Issuing</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>Marketing Support</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>Cardholder Benefits Program</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>Cashback Rewards Program</li>
        </ul>
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
