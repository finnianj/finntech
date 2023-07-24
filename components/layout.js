import styles from './layout.module.css';
import Link from 'next/link';

export const siteTitle = 'Finntech';

export default function Layout({ children, home, size }) {
  const maxWidthValue = size ? size : '36rem'

  return (
    <div className={styles.container} style={{ maxWidth: maxWidthValue }}>
      {/* <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Finntech"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head> */}


      {children}
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
