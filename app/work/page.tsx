import React from 'react';
import styles from './styles.module.scss';
import { selectedWorksDataInDetail } from '@/util';

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
          {selectedWorksDataInDetail.map((current) => (
            <div key={current.name} className={styles.work_container}>
              <p className={styles.work_heading}>{current.name}</p>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
