import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './contact.module.css';
import utilStyles from '../styles/utils.module.css';

export default function AppStore() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactLeft}>
        some words
      </div>
      <div className={styles.contactRight}>
        form
      </div>
    </div>
  )
}
