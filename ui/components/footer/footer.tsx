'use client';
import { basicFadeInVarianst, cn } from '@/util';
import React, { useEffect, useState } from 'react';
import ProfileImage from '../../../assets/images/profile.png';
import Image from 'next/image';
import styles from './Footer.module.scss';
import { MdContentCopy } from 'react-icons/md';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

import Link from 'next/link';

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleClick = () => {
    setShowPopup(true);
    navigator.clipboard.writeText('riddhibanburman1@gmail.com');
  };
  useEffect(() => {
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  }, [showPopup]);
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.footer_container} style={{ position: 'relative' }}>
        {showPopup && (
          <motion.div
            variants={basicFadeInVarianst}
            initial="initial"
            animate="animate"
            style={{
              padding: '8px 16px',
              background: '#f1f1f1',
              color: '#000000',
              border: '1px solid #000000',
              position: 'absolute',
              zIndex: 100,
              bottom: 80,
              right: 40,
              borderRadius: 12,

              fontSize: 16,

              transition: 'all .3s ease-in',
            }}
          >
            copied!!
          </motion.div>
        )}
        <div className={styles.image_container}>
          <Image src={ProfileImage} alt="" />
        </div>
        <div className={styles.introduction_container}>
          <h2 className={styles.heading}>I&apos;m Riddhiban Burman</h2>
          <p>Senior Visual Designer based </p>
          <p>in Bangalore , India</p>
        </div>
        <div className={styles.opportunity_container}>
          <div className={styles.opportunity}>
            <p>Think I&apos;d be a good fit for your team or project?</p>
            <p>Lets Connect.</p>
          </div>
          <div className={styles.email_container}>
            <p className={styles.email}>riddhibanburman1@gmail.com</p>
            <span onClick={handleClick}>
              <MdContentCopy color="#888888" />
            </span>
          </div>
          <div className={styles.socials_container}>
            <p className={styles.header}>Socials</p>
            <div className={styles.socials_tray}>
              <Link
                href="https://www.linkedin.com/in/riddhiban-roy-burman-247867120"
                target="_blank"
              >
                <span>
                  <FaLinkedin />
                </span>
                Linkedin
              </Link>
              <Link
                href={'https://www.instagram.com/riddhiban'}
                target="_blank"
              >
                <span>
                  <FaInstagram />
                </span>
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
