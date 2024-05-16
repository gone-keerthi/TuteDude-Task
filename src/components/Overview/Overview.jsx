import React from "react";
import styles from "./overview.module.css";

const Overview = () => {
  return (
    <>
      <div className={styles.overviewComponent}>
        <p className={styles.headerChip}>An IIT Delhi Alumni Initiative</p>
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
          <span> Personal Mentorship </span>
          <span> Internship Assistance </span>
          <span> Industry Certified Courses </span>
        </div>
        <div className={styles.overviewBtns}>
          <button>Enroll Now </button>
          <button>Know More </button>
        </div>
        <div className={styles.cardsComponent}>
          <div className={styles.card}>
            <img src="" alt="courses" />
            <div className={styles.cardContent}>
              <h2>24</h2>
              <p>Courses</p>
            </div>
          </div>

          <div className={styles.card}>
            <img src="" alt="courses" />
            <div className={styles.cardContent}>
              <h2>30k+</h2>
              <p>Learners</p>
            </div>
          </div>

          <div className={styles.card}>
            <img src="" alt="courses" />
            <div className={styles.cardContent}>
              <h2>100k+</h2>
              <p> Doubts Solved </p>
            </div>
          </div>

          <div className={styles.card}>
            <img src="" alt="courses" />
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
