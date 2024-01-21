'use client';
import React from 'react';
import styles from './styles.module.scss';
import { useRouter } from 'next/navigation';
import { selectedWorksDataInDetail } from '@/util';
import Halloween from '../../../assets/images/halloween.png';
import Image from 'next/image';

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
              <p className={styles.work_heading} key={word}>
                {word}
              </p>
            ))}
          </div>
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
          {id === '1' && (
            <div className={styles.second_image_container}>
              <Image src={Halloween} alt={current.name} />
            </div>
          )}
          {current.secondVideoTitle && (
            <p className={styles.second_heading}>{current.secondVideoTitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
