'use client';
import React from 'react';
import styles from './styles.module.scss';
import { useRouter } from 'next/navigation';
import {
  basicFadeInVarianst,
  fadeInVariants,
  selectedWorksDataInDetail,
} from '@/util';
import Halloween from '../../../assets/images/halloween.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Page = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const id = params.id as string;

  const current = //@ts-ignore
    selectedWorksDataInDetail[id] as (typeof selectedWorksDataInDetail)[number];

  const splitHeading = current.name.split(' ');

  return (
    <div className={styles.page_wrapper}>
      <div className={styles.page_container}>
        <div key={current.name} className={styles.work_container}>
          <div className={styles.work_heading_container}>
            {splitHeading.map((word) => (
              <motion.p
                variants={fadeInVariants}
                initial="initial"
                animate="animate"
                whileInView={'animate'}
                viewport={{ once: true }}
                custom={2}
                className={styles.work_heading}
                key={word}
                style={{ marginBottom: 48 }}
              >
                {word}
              </motion.p>
            ))}
          </div>
          <div className={styles.video_container}>
            <iframe
              title="vimeo-player"
              src={current.videos[0]}
              allowFullScreen
            ></iframe>
          </div>
          <motion.p
            variants={basicFadeInVarianst}
            initial="initial"
            animate="animate"
            whileInView={'animate'}
            viewport={{ once: true }}
            custom={2}
            className={styles.description}
          >
            {current.description}
          </motion.p>
          <ul className={styles.points}>
            {current.points.map((currentPoint, index) => (
              <motion.li
                variants={fadeInVariants}
                initial="initial"
                animate="animate"
                whileInView="animate"
                custom={index}
                key={currentPoint}
                className={styles.point}
              >
                {currentPoint}
              </motion.li>
            ))}
          </ul>
          {current.videos.length === 2 && (
            <div className={styles.video_container}>
              <iframe
                title="vimeo-player"
                src={current.videos[1]}
                allowFullScreen
              ></iframe>
              {current.secondVideoTitle && (
                <p className={styles.second_heading}>
                  {current.secondVideoTitle}
                </p>
              )}
            </div>
          )}
          {current.videos.length === 3 && (
            <div className={styles.two_video_container}>
              <div className={styles.video_one}>
                <iframe
                  title="vimeo-player"
                  src={current.videos[1]}
                  allowFullScreen
                ></iframe>
                <p style={{ textAlign: 'center' }}>Card Selection</p>
              </div>
              <div className={styles.video_two}>
                <iframe
                  title="vimeo-player"
                  src={current.videos[2]}
                  allowFullScreen
                ></iframe>
                <p style={{ textAlign: 'center' }}>Leaderboard</p>
              </div>
            </div>
          )}

          {id === '1' && (
            <div
              className={styles.second_image_container}
              style={{ marginTop: 24 }}
            >
              <Image src={Halloween} alt={current.name} />
              <p>stages for creating our halloween theme</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
