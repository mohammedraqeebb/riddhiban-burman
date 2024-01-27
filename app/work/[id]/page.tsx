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
          <motion.p
            variants={basicFadeInVarianst}
            initial="initial"
            whileInView={'animate'}
            viewport={{ once: true }}
            custom={2}
            className={styles.work_heading}
          >
            {current.name}
          </motion.p>
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
            whileInView={'animate'}
            viewport={{ once: true }}
            custom={1}
            className={styles.description}
          >
            {current.description}
          </motion.p>
          <ul className={styles.points}>
            {current.points.map((currentPoint, index) => (
              <motion.li
                key={index}
                className={styles.point}
                variants={fadeInVariants}
                initial="initial"
                whileInView={'animate'}
                viewport={{ once: true }}
                custom={index}
              >
                {currentPoint}
              </motion.li>
            ))}
          </ul>
          {current.videos.length === 2 && (
            <div className={styles.video_container} style={{ marginTop: 72 }}>
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
            <div
              style={{ marginTop: 72 }}
              className={styles.two_video_container}
            >
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
