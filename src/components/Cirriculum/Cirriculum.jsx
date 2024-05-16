import React from "react";
import styles from './curriculum.module.css'
const Cirriculum = () => {
  return (
    <>
      <div className={styles.cirriculumComponent}>
        <p className={styles.curriculumComponentHeader}>DATASCIENCE COURSE LEARNING PATH </p>
        <h1> <span> Data Science </span> <span> Course Curriculum </span></h1>
        <div className={styles.accordion}>
          <div className={styles.accordionCard}>
            <div className={styles.accordionCardLeft}>
              <h2>C++</h2>
              <p>Learn C++ for strong programming fundamentals. </p>
            </div>
            <div className={styles.accordionCardRight}>
              <p>View Curriculum </p>
            </div>
          </div>

          <div className={styles.accordionCard}>
            <div className={styles.accordionCardLeft}>
              <h2>MERN Stack </h2>
              <p>Master the MERN stack for high-demand projects. </p>
            </div>
            <div className={styles.accordionCardRight}>
              <p>View Curriculum </p>
            </div>
          </div>

          <div className={styles.accordionCard}>
            <div className={styles.accordionCardLeft}>
              <h2>Data Structure & Algorithm </h2>
              <p>Excel in Data Structures and Algorithms for interview success.  </p>
            </div>
            <div className={styles.accordionCardRight}>
              <p>View Curriculum </p>
            </div>    
          </div>

          <div className={styles.accordionCard}>
            <div className={styles.accordionCardLeft}>
              <h2> Competitive Programming </h2>
              <p> Structures and Algorithms for interview success.</p>
            </div>
            <div className={styles.accordionCardRight}>
              <p>View Curriculum </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cirriculum;
