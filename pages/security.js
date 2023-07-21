import Navbar from '../components/navbar.js';
import Layout from '../components/layout.js';
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

export default function Security() {
  return (
    <>
      <Navbar />
        <Layout>
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

          <div className="content">
            <h1 className={utilStyles.centerText}>Security and Privacy Policy</h1>
            <br></br>
            <h2>Our Approach</h2>
            <p>
              At Finntech, we take the security and privacy of our customers' financial information very seriously. We understand the importance of safeguarding your data and ensuring a secure environment for all our users. This page outlines the security measures we have implemented and our commitment to protecting your personal information.
            </p>
            <h2>Data Encryption and Protection</h2>
            <p>
              All data transmitted between your device and our servers is encrypted using industry-standard SSL/TLS protocols. This ensures that any information you enter or access on our platform remains confidential and secure. Additionally, we store your data in encrypted databases, making it inaccessible to unauthorized parties.
            </p>
            <h2>Authentication and Access Controls</h2>
            <p>
              To prevent unauthorized access to your account, we implement strong authentication measures. This includes multi-factor authentication (MFA), which adds an extra layer of security by requiring a one-time code sent to your registered device when signing in. We also regularly monitor and audit user access to identify and address any suspicious activities promptly.
            </p>
            <h2>Regular Security Audits and Testing</h2>
            <p>
              To maintain the highest level of security, our platform undergoes regular security audits and vulnerability testing. Our team of security experts continuously assesses the system for potential weaknesses and addresses any identified issues promptly. We stay up-to-date with the latest security practices and technologies to ensure the safety of your data.
            </p>
            <h2>Privacy Policy and Data Usage</h2>
            <p>
              Our Privacy Policy outlines how we collect, use, and share your personal information. We are committed to being transparent about our data practices and ensuring that your data is used responsibly and ethically. We only collect the necessary information required to provide our services and do not share your data with third parties for marketing purposes.
            </p>
            <h2>Secure Transactions</h2>
            <p>
              Your financial transactions on our platform are protected using advanced encryption and security protocols. We work with trusted payment partners to ensure the safe processing of payments, and we never store your credit card or banking details on our servers.
            </p>
            <h2>User Education and Awareness</h2>
            <p>
              We believe that user education is key to maintaining a secure environment. We provide resources and guides to help you understand the best security practices and avoid common online threats, such as phishing and identity theft.
            </p>
            <h2>Continuous Improvement</h2>
            <p>
              At Finntech, we are committed to continuous improvement in our security measures. We regularly update our systems to incorporate the latest security advancements and adhere to industry best practices.
            </p>
            <p>
              If you have any questions or concerns about our security and privacy practices, please do not hesitate to contact our support team. Your trust in Finntech is of utmost importance to us, and we remain dedicated to ensuring the protection of your data and delivering a secure and reliable financial platform.
            </p>
          </div>
        </Layout>
      </>
    )
  }
