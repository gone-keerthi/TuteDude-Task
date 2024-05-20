import React from "react";
import styles from "./overview.module.css";
// import icons
import { FaGraduationCap } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { FaRegQuestionCircle } from "react-icons/fa";

// import assets
import Courses from './courses.png'
import Graduated from './Graduated.png'
import Question from './Question mark.png'
import Completed from './Complete.png'

const Overview = () => {
  return (
    <>
      <div className={styles.overviewComponent}>
        <p className={styles.headerChip}> <FaGraduationCap /> An IIT Delhi Alumni Initiative</p>
        <h1>
          Become an Expert in the <br></br>field of{" "}
          <span>
            Data Science <br></br>with 6 courses{" "}
          </span>{" "}
        </h1>
        <p>
          A specially crafted Tech Kickstarter, with{" "}
          <strong> 5+extensive online courses.</strong>{" "}
        </p>
        <div className={styles.chipsCards}>
          <span> <MdVerified /> Personal Mentorship </span>
          <span> <MdVerified /> Internship Assistance </span>
          <span> <MdVerified /> Industry Certified Courses </span>
        </div>
        <div className={styles.overviewButtons}>
          <button> Enroll Now <FiSend /> </button>
          <button>Know More <FaRegQuestionCircle /> </button>
        </div>
        <div className={styles.cardsComponent}>
          <div className={styles.card}>
            <img src={Courses} alt="courses" />
            <div className={styles.cardContent}>
              <h2>24</h2>
              <p>Courses</p>
            </div>
          </div>

          <div className={styles.card}>
            <img src={Graduated} alt="courses" />
            <div className={styles.cardContent}>
              <h2>30k+</h2>
              <p>Learners</p>
            </div>
          </div>

          <div className={styles.card}>
            <img src={Question} alt="courses" />
            
            <div className={styles.cardContent}>
              <h2>100k+</h2>
              <p> Doubts Solved </p>
            </div>
          </div>

          <div className={styles.card}>
            <img src={Completed} alt="courses" />
            <div className={styles.cardContent}>
              <h2>10k+</h2>
              <p>Student Projects</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
