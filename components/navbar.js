import Link from 'next/link';
import styles from './navbar.module.css';
import React, { useState } from 'react';

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          Finntech
        </Link>
      </div>
      <div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
        <Link href="/services">
          Services
        </Link>
        <Link href="/pricing">
          Pricing and Plans
        </Link>
        <Link href="/security">
          Security
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
