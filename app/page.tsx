'use client';
import styles from './styles.module.scss';
import ProfileImage from '../assets/images/home_profile.png';
import Image from 'next/image';
import {
  basicFadeInVarianst,
  experienceData,
  fadeInVariants,
  selectedWorksData,
} from '@/util';
import { motion } from 'framer-motion';

import Link from 'next/link';
const position = ['senior', 'visual', 'designer'];

const Page = () => {
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.page_container}>
        <div className={styles.position_container}>
          {position.map((word, index) => (
            <motion.p
              className={styles.position}
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

          <div className={styles.experience_container}>
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                Currently brewing
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                experience at terra
              </motion.p>
            </div>
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                whileInView={'animate'}
              >
                (2021-present)
              </motion.p>
            </div>
          </div>
        </div>

        <motion.div
          variants={basicFadeInVarianst}
          initial="initial"
          whileInView={'animate'}
          viewport={{ once: true }}
          custom={2}
          className={styles.image_container}
        >
          <Image src={ProfileImage} alt="" />
        </motion.div>
        <div className={styles.self_container}>
          <motion.p
            variants={basicFadeInVarianst}
            initial="initial"
            whileInView={'animate'}
            viewport={{ once: true }}
            custom={2}
            className={styles.first}
          >
            Passionate creating great
            <br /> experience for Digital <br /> Products
          </motion.p>
          <motion.p
            variants={basicFadeInVarianst}
            initial="initial"
            whileInView={'animate'}
            viewport={{ once: true }}
            custom={4}
            className={styles.second}
          >
            I achieve impactful results <br />
            through strategic thinking and <br />
            data-driven Insights.
          </motion.p>
        </div>
        <div className={styles.records_wrapper}>
          <div className={styles.header_container}>
            <p>relevant</p>
            <p>experience</p>
          </div>
          <div className={styles.records_container}>
            {experienceData.map((currentExperience, id) => (
              <motion.div
                variants={fadeInVariants}
                initial="initial"
                whileInView="animate"
                custom={id}
                viewport={{ once: true }}
                key={id}
                className={styles.record_container}
              >
                <div className={styles.left}>
                  <p className={styles.company_name}>
                    {currentExperience.companyName}
                  </p>
                  <div className={styles.pos_dur_container}>
                    <p className={styles.position}>
                      {currentExperience.position}
                    </p>
                    <p className={styles.duration}>
                      {currentExperience.duration}
                    </p>
                  </div>
                  <p className={styles.description}>
                    {currentExperience.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className={styles.selected_works_wrapper}>
          <div className={styles.header_container}>
            <p> Selected</p>
            <p> Works</p>
          </div>
          <div className={styles.selected_works_container}>
            {selectedWorksData.map((curentWord, index) => (
              <motion.div
                variants={fadeInVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
                viewport={{ once: true }}
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
                  <Link href={`/work/${index}`} className={styles.view_button}>
                    View
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
