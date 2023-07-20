import React, { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css'; // CSS module for styling
import utilStyles from '../styles/utils.module.css'; // CSS module for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faF } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>
        <div className={utilStyles.logo}>
          <FontAwesomeIcon icon={faF} className={`fa-flip-horizontal`}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faF} className={`${utilStyles.f}`}></FontAwesomeIcon>
        </div>
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
        <Link href="/guide">
          Business Guide
        </Link>
      </div>
      <div className={`${styles.burgerMenu} ${isMenuOpen ? styles.open : ''} ${styles.rotateX}`} onClick={handleMenuToggle}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      {isMenuOpen && (
        <div className={styles.fullScreenMenu}>
          <div className={styles.menuContent}>
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
