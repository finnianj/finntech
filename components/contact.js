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
        <form action="/submit" method="post">
          <div className={styles.formItem}>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className={styles.formItem}>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className={styles.formItem}>
            <label for="country">Country</label>
            <input type="text" id="country" name="country" required />
          </div>

          <div className={styles.formItem}>
            <label for="package">Package</label>
            <select id="package" name="package" required>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
              <option value="business">Business</option>
            </select>
          </div>

          <div className={styles.formItem}>
            <label for="comments">Comments</label>
            <textarea id="comments" name="comments" rows="4"></textarea>
          </div>

          <div className={styles.formItem} >
            <button className={styles.submit} type="submit">Request Invite</button>
          </div>

        </form>

      </div>
    </div>
  )
}
