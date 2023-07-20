import React, { useState } from 'react';
import styles from './footer.module.css'; // CSS module for styling

export default function Footer() {
  return (
    <div className={styles.footer}>

      <div className={styles.footerTop}>

        <div className={styles.topItem}>
          <h6>PRODUCTS</h6>
          <div className={styles.list}>
            <a href="/thanks">Virtual Cards</a>
            <a href="/thanks">Physical Cards</a>
            <a href="/thanks">NFC Cards</a>
            <a href="/thanks">Apple Pay</a>
            <a href="/thanks">Google Pay</a>
            <a href="/thanks">Samsung Pay</a>
            <a href="/thanks">SXP</a>
          </div>
        </div>

        <div className={styles.topItem}>
          <h6>CONNECT</h6>
          <div className={styles.list}>
            <a href="/thanks">Medium</a>
            <a href="/thanks">Twitter</a>
            <a href="/thanks">Facebook</a>
            <a href="/thanks">Telegram News</a>
            <a href="/thanks">Telegram Group</a>
            <a href="/thanks">Instagram</a>
          </div>
        </div>

        <div className={styles.topItem}>
          <h6>COMPANY</h6>
          <div className={styles.list}>
            <a href="/thanks">About Us</a>
            <a href="/pricing">Pricing</a>
            <a href="/thanks">Contact Us</a>
            <a href="/thanks">Developers</a>
            <a href="/thanks">Privacy Policy</a>
            <a href="/thanks">Terms of Service</a>
          </div>

        </div>

      </div>
      <div className={styles.footerBottom}>
        <p>Copyright© 2018-2021 Finntech. All rights reserved.</p>
        <h1>Finntech</h1>
      </div>

    </div>

  )
}
