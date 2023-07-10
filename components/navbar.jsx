import Link from 'next/link';
import styles from './Navbar.module.css'; // CSS module for styling

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Finntech</a>
        </Link>
      </div>
      <div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
        <Link href="/services">
          <a>Services</a>
        </Link>
        <Link href="/pricing">
          <a>Pricing and Plans</a>
        </Link>
        <Link href="/security">
          <a>Security</a>
        </Link>
      </div>
      <div className={styles.burgerMenu} onClick={handleMenuToggle}>
        <div className={`${styles.bar} ${isMenuOpen ? styles.close : ''}`}></div>
        <div className={`${styles.bar} ${isMenuOpen ? styles.close : ''}`}></div>
        <div className={`${styles.bar} ${isMenuOpen ? styles.close : ''}`}></div>
      </div>
    </nav>
  );
};


