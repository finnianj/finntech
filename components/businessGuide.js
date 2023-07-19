import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './businessGuide.module.css';
import utilStyles from '../styles/utils.module.css';

export default function BusinessGuide(posts) {
  console.log(posts);
  return (
    <div className={utilStyles.container}>
      {posts.data.forEach(post => {
        <p>post</p>
      })}
    </div>
  )
}
