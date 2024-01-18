import { cn } from '@/util';
import React from 'react';
import ProfileImage from '../../../assets/images/profile.png';
import Image from 'next/image';
import styles from './Footer.module.scss';
import { MdContentCopy } from 'react-icons/md';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.footer_container}>
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
            <span>
              <MdContentCopy color="#888888" />
            </span>
          </div>
          <div className={styles.socials_container}>
            <p className={styles.header}>Socials</p>
            <div className={styles.socials_tray}>
              <p>
                <span>
                  <FaLinkedin />
                </span>
                Linkedin
              </p>
              <p>
                <span>
                  <FaInstagram />
                </span>
                Instagram
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
