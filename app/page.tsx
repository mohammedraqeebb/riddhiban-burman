import styles from './styles.module.scss';
import ProfileImage from '../assets/images/home_profile.png';
import Image from 'next/image';
import { experienceData, selectedWorksData } from '@/util';
const Page = () => {
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.page_container}>
        <div className={styles.position_container}>
          <div className={styles.position}>
            <p>senior</p>
            <p>visual</p>
            <p>Designer</p>
          </div>
          <div className={styles.experience_container}>
            <div>
              <p>Currently brewing</p>
              <p>experience at terra</p>
            </div>
            <div>
              <p>(2021-present)</p>
            </div>
          </div>
        </div>

        <div className={styles.image_container}>
          <Image src={ProfileImage} alt="" />
        </div>
        <div className={styles.self_container}>
          <p className={styles.first}>
            Passionate creating great
            <br /> experience for Digital <br /> Products
          </p>
          <p className={styles.second}>
            I achieve impactful results <br />
            through strategic thinking and <br />
            data-driven Insights.
          </p>
        </div>
        <div className={styles.records_wrapper}>
          <p className={styles.header}>
            relevant <br />
            experience
          </p>
          <div className={styles.records_container}>
            {experienceData.map((currentExperience, id) => (
              <div key={id} className={styles.record_container}>
                <div className={styles.left}>
                  <p className={styles.company_name}>
                    {currentExperience.companyName}
                  </p>
                  <p className={styles.position}>
                    {currentExperience.position}
                  </p>
                  <p className={styles.description}>
                    {currentExperience.description}
                  </p>
                </div>
                <div className={styles.right}>
                  <p>{currentExperience.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.selected_works_wrapper}>
          <p className={styles.header}>
            Selected
            <br />
            Works
          </p>
          <div className={styles.selected_works_container}>
            {selectedWorksData.map((curentWord) => (
              <div
                key={curentWord.name}
                className={styles.selected_work_container}
              >
                <div className={styles.work_image_container}>
                  <Image src={curentWord.imgURl} alt={curentWord.name} />
                </div>
                <div className={styles.details_wrapper}>
                  <div className={styles.details_container}>
                    <p className={styles.name}>{curentWord.name}</p>
                    <p className={styles.sub_heading}>
                      {curentWord.subheading}
                    </p>
                    <p className={styles.description}>
                      {curentWord.description}
                    </p>
                  </div>
                  <button className={styles.view_button}>View</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
