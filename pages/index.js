import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';



export default function Home() {
  return (
    <>
    <Navbar />


    <header className={styles.header} style={{height: 'calc(100vh - 80px)'}}>
      <div className={styles.headerLeft}>
        <h1 className={styles.headerTitle}>
          Empowering Your Future
        </h1>
        <p className={styles.headerDescription}>
          At Finntech, we are committed to revolutionizing the way you manage your finances. Our cutting-edge platform offers a wide range of financial services designed to simplify your life and help you achieve your goals.
        </p>
        <div className={styles.headerButtons}>
          <div className={utilStyles.blueButton}>
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

      <p>


At Finntech, we are committed to revolutionizing the way you manage your finances. Our cutting-edge platform offers a wide range of financial services designed to simplify your life and help you achieve your goals. Whether you're an individual looking to optimize your personal finances or a business owner seeking growth opportunities, we have the tools and expertise to support you every step of the way.

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
