import Link from 'next/link';
import React from 'react';
import styles from './Header.module.scss';
import { MdContentCopy } from 'react-icons/md';

const Header = () => {
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.header_container}>
        <div className={styles.header_left}>
          <Link href="/" className={styles.logo}>
            RIDDHIBAN BURMAN
          </Link>
          <Link href="/">ABOUT</Link>
          <Link href="/">WORK</Link>
        </div>
        <div className={styles.header_right}>
          <p>Let&apos;s Connect</p>
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
