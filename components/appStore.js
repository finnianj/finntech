import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './appStore.module.css';
import utilStyles from '../styles/utils.module.css';

export default function AppStore() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h1>
          Empowering Your Future
        </h1>
        <p className={styles.description}>
          Finntech, the innovative digital banking app that revolutionizes the way you manage your finances. Seamlessly access and control your accounts, make secure transactions, and enjoy personalized financial insights, all at your fingertips.
        </p>
        <div className={styles.buttons}>
          <div className={utilStyles.blackButton}>
            <Link href=''>Get Started</Link>
          </div>
          <div className={utilStyles.whiteButton}>
            <Link href=''>Learn More</Link>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        image
      </div>
    </div>
  )
}
