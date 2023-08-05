import styles from './layout.module.css';
import Link from 'next/link';

export const siteTitle = 'Finntech';

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean; // Making home optional
  size?: string; // Making size optional
}

const Layout: React.FC<LayoutProps> = ({ children, home, size }) => {
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

export default Layout
