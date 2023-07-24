import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


import styles from './contact.module.css';
import utilStyles from '../styles/utils.module.css';

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactLeft}>
        <div className={styles.contactText}>
          <h1>
            Request an invitation
            <br></br>
            <FontAwesomeIcon icon={faEnvelope} className={styles.faIcon}></FontAwesomeIcon>
          </h1>
          <p className={utilStyles.lightText}>For any additional queries, please contact our sales team</p>
          <p className={utilStyles.lightText}><FontAwesomeIcon icon={faPhone} className={styles.faIcon}></FontAwesomeIcon>  +49 1573 6600 324</p>
        </div>
      </div>
      <div className={styles.contactRight}>
        <form action="/thanks" method="get">
          <div className={styles.formItem}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className={styles.formItem}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className={styles.formItem}>
            <label htmlFor="country">Country</label>
            <input type="text" id="country" name="country" required />
          </div>

          <div className={styles.formItem}>
            <label htmlFor="package">Package</label>
            <select id="package" name="package" required>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
              <option value="business">Business</option>
            </select>
          </div>

          <div className={styles.formItem}>
            <label htmlFor="comments">Comments</label>
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
