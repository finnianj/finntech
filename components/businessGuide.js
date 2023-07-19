import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './businessGuide.module.css';
import utilStyles from '../styles/utils.module.css';

export default function BusinessGuide({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <div className={styles.card}>
          <p key={post.id}>{post.title}</p>
        </div>
      ))}
    </>
  );
}
