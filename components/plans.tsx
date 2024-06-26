import React, { useState } from 'react';
import Link from 'next/link';
import styles from './plans.module.css';
import utilStyles from '../styles/utils.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function Plans() {
  return (
    <>
      <Link href={"/get_started"} className={utilStyles.noUnderline}>
        <div className={styles.card}>

            <h3>Standard</h3>
            <p>
            The Standard Account is your all-inclusive solution for everyday banking needs. With secure mobile and online banking, instant fund transfers, a globally accepted debit card, and round-the-clock customer support, managing your finances has never been easier.
            </p>
            <ul>
              <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>Secure mobile and online banking</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>Globally acceted debit card</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>Temporary Virtual until Physical arrives</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>24/7 customer support</li>
            </ul>
            <div className={styles.cardLower}>
              <div className={styles.cardFees}>
                <h5>No Monthly Fee</h5>
                <p><em>Monthly maintenance fee</em></p>
              </div>
              <div className={styles.cardFees}>
                <h5>Free</h5>
                <p><em>Standard transfers</em></p>
              </div>
              <div className={styles.cardFees}>
                <h5>Free</h5>
                <p><em>ATM withdrawals at partner networks</em></p>
              </div>
              <div className={styles.cardFees}>
                <h5>2%</h5>
                <p><em>Foreign transaction fee</em></p>
              </div>
            </div>
          </div>

      </Link>

      <Link href={"/get_started"} className={utilStyles.noUnderline}>
        <div className={styles.card}>
          <h3>Premium</h3>
          <p>
          Elevate your banking experience with our Premium Account, offering exclusive benefits and personalized services to align with your financial goals. Enjoy priority customer support, higher daily transaction limits, personalized financial planning assistance, and access to a premium rewards program, all designed to enhance your financial well-being.
          </p>
          <ul>
            <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>Priority customer support</li>
            <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>Higher daily transaction limits</li>
            <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>Personalised financial planning assistance</li>
            <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>Access to Premium Rewards program</li>
          </ul>
          <div className={styles.cardLower}>
            <div className={styles.cardFees}>
              <h5>€9.99</h5>
              <p><em>Monthly maintenance fee</em></p>
            </div>
            <div className={styles.cardFees}>
              <h5>Free</h5>
              <p><em>Premium fund transfers</em></p>
            </div>
            <div className={styles.cardFees}>
              <h5>Free</h5>
              <p><em>ATM withdrawals worldwide</em></p>
            </div>
            <div className={styles.cardFees}>
              <h5>1%</h5>
              <p><em>Foreign transaction fee</em></p>
            </div>
          </div>
        </div>
      </Link>

      <Link href={"/get_started"} className={utilStyles.noUnderline}>
        <div className={styles.card}>
          <h3>Business Account</h3>
          <p>
          Unlock the full potential of your business with our Finntech Business Account, designed to cater to the unique financial needs of entrepreneurs like you. Enjoy a suite of features and services that streamline your business transactions and drive growth. From intuitive expense tracking to powerful financial insights, the Finntech Business Account puts you in control of your finances.
          </p>
          <ul>
            <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>Easy and efficient expense tracking</li>
            <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>Seamless invoicing and payment processing</li>
            <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>Comprehensive financial analytics and reporting</li>
            <li><FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon}></FontAwesomeIcon>Multi-user access for collaborative money management</li>
          </ul>
          <div className={styles.cardLower}>
            <div className={styles.cardFees}>
              <h5>No Monthly Fee</h5>
              <p><em>Monthly maintenance fee</em></p>
            </div>
            <div className={styles.cardFees}>
              <h5>Free</h5>
              <p><em>Internal Fund Transfers</em></p>
            </div>
            <div className={styles.cardFees}>
              <h5>1.5%</h5>
              <p><em>Merchant Transaction Fee</em></p>
            </div>
            <div className={styles.cardFees}>
              <h5>Free</h5>
              <p><em>Online and Mobile Banking</em></p>
            </div>
          </div>
        </div>
      </Link>
    </>
  )}
