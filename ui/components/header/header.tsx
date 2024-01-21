'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { MdContentCopy } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { basicFadeInVarianst } from '@/util';

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);
  const path = usePathname();

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  }, [showPopup]);

  const handleClick = () => {
    setShowPopup(true);
    navigator.clipboard.writeText('riddhibanburman1@gmail.com');
  };

  return (
    <div className={styles.header_wrapper}>
      <div style={{ position: 'relative' }} className={styles.header_container}>
        {showPopup && (
          <motion.div
            variants={basicFadeInVarianst}
            initial="initial"
            animate="animate"
            style={{
              padding: '8px 16px',
              background: '#000000',
              color: '#f1f1f1',
              position: 'absolute',
              zIndex: 100,
              top: 50,
              borderRadius: 12,
              right: 50,
              fontSize: 16,
              border: '1px solid #000000',
              transition: 'all .3s ease-in',
            }}
          >
            copied!!
          </motion.div>
        )}
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
            <span onClick={handleClick} style={{ cursor: 'pointer' }}>
              <MdContentCopy className="copy_icon" color="#888888" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
