'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { MdContentCopy } from 'react-icons/md';
import { usePathname } from 'next/navigation';

const Header = () => {
  const path = usePathname();

  return (
    <div className={styles.header_wrapper}>
      <div className={styles.header_container}>
        <div className={styles.header_left}>
          <Link href="/" className={styles.logo}>
            RIDDHIBAN BURMAN
          </Link>
          <Link
            href="/"
            style={{ color: !path.includes('work') ? '#000000' : '#888888' }}
          >
            ABOUT
          </Link>
          <Link
            href="/work"
            style={{ color: path.includes('work') ? '#000000' : '#888888' }}
          >
            WORK
          </Link>
        </div>
        <div className={styles.header_right}>
          <p className={styles.connect}>Let&apos;s Connect</p>
          <div className={styles.email_container}>
            <p className={styles.email}>riddhibanburman1@gmail.com</p>
            <span>
              <MdContentCopy color="#888888" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
