import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './business_guide.module.css';
import utilStyles from '../styles/utils.module.css';

export default function BusinessGuide({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`} className={utilStyles.noUnderline}>
          <div className={styles.card}>
            <Image
              priority
              src={post.image}
              className={styles.image}
              height={150}
              width={150}
              alt=""
            />
            <div className={styles.lower}>
              <h5 className={styles.title}>{post.title}</h5>
              <p className={styles.info}><em>{post.author}, {post.role}</em></p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
