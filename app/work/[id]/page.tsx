'use client';
import React from 'react';
import styles from './styles.module.scss';
import { useRouter } from 'next/navigation';
import { selectedWorksDataInDetail } from '@/util';

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
          <div className={styles.video_container}></div>
          <p className={styles.description}>{current.description}</p>
          <ul className={styles.points}>
            {current.points.map((currentPoint) => (
              <li key={currentPoint} className={styles.point}>
                {currentPoint}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
