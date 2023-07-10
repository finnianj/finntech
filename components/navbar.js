import React, { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css'; // CSS module for styling

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
      <div className={styles.menu}>
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
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      {isMenuOpen && (
        <div className={styles.fullScreenMenu}>
          <div className={styles.menuContent}>
            <div className={styles.closeButton} onClick={handleMenuToggle}>
              X
            </div>
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
        </div>
      )}
    </nav>
  );
};
