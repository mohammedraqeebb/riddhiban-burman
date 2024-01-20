import React from 'react';
import styles from './styles.module.scss';
import { selectedWorksDataInDetail } from '@/util';
import Halloween from '../../assets/images/halloween.png';
import Image from 'next/image';

const page = () => {
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.page_container}>
        <div className={styles.heading_container}>
          <p className={styles.duration}>(2019-2023)</p>
          <p className={styles.heading}>
            Selected <br />
            Works
          </p>
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
                <div className={styles.video_container}>
                  <iframe
                    title="vimeo-player"
                    src={current.videos[1]}
                    allowFullScreen
                  ></iframe>
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
                  </div>
                  <div className={styles.video_two}>
                    <iframe
                      title="vimeo-player"
                      src={current.videos[2]}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
              {index === 1 && (
                <div className={styles.second_image_container}>
                  <Image src={Halloween} alt={current.name} />
                </div>
              )}
              {current.secondVideoTitle && (
                <p
                  id={index === 0 ? 'first' : ''}
                  className={styles.second_heading}
                >
                  {current.secondVideoTitle}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
