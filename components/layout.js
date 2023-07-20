import styles from './layout.module.css';
import Link from 'next/link';

export const siteTitle = 'Finntech';

export default function Layout({ children, home, size }) {
  console.log(size);
  const maxWidthValue = size ? size : '36rem'

  return (
    <div className={styles.container} style={{ maxWidth: maxWidthValue }}>
      {children}
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
