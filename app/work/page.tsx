import React from 'react';
import styles from './styles.module.scss';
import { fadeInVariants, selectedWorksDataInDetail } from '@/util';
import Halloween from '../../assets/images/halloween.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

const heading = ['Selected', 'Works'];

const page = () => {
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.page_container}>
        <div className={styles.heading_container}>
          <p className={styles.duration}>(2019-2023)</p>
          {heading.map((word, index) => (
            <motion.p
              className={styles.heading}
              variants={fadeInVariants}
              initial="initial"
              animate="animate"
              whileInView="animate"
              key={word}
              custom={index}
            >
              {word}
            </motion.p>
          ))}
        </div>
        <div className={styles.works_container}>
          {selectedWorksDataInDetail.map((current, index) => (
            <div key={current.name} className={styles.work_container}>
              <p className={styles.work_heading}>{current.name}</p>
              <div className={styles.video_container}>
                <iframe
                  title="vimeo-player"
                  src={current.videos[0]}
                  allowFullScreen
                ></iframe>
              </div>

              <p className={styles.description}>{current.description}</p>
              <ul className={styles.points}>
                {current.points.map((currentPoint) => (
                  <li key={currentPoint} className={styles.point}>
                    {currentPoint}
                  </li>
                ))}
              </ul>
              {current.videos.length === 2 && (
                <div
                  className={styles.video_container}
                  style={{ marginTop: 72 }}
                >
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
              {index === 1 && (
                <div className={styles.second_image_container}>
                  <Image src={Halloween} alt={current.name} />
                  <p>stages for creating our halloween theme</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
