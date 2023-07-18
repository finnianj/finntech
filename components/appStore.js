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
          One app.
          <br></br>
          Infinite potential.
        </h1>
        <p className={styles.description}>
          Discover the boundless possibilities at your fingertips and unlock a world of financial growth. Seamlessly manage your accounts, make secure transactions and access personalized financial insights, all within a single app. Experience the future of banking, where your financial aspirations have no limits with Finntech.
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
        <Image
          src="/../public/images/appStore.png"
          alt="Description of the image"
          width={200}
          height={200}
        />
      </div>
    </div>
  )
}
