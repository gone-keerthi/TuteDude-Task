import React from "react";
import styles from "./testimonials.module.css";
import Certificate from './new-certiciate-design.png';
import Abcd from './abcder.png';
const Testimonials = () => {
  return (
    <React.Fragment>
      <div className={styles.testimonialsComponent}>
        <div className={styles.topCompaniesComponent}>
          <h1>
            <span>Top Companies Hiring </span> <span>Data Scientist </span>
          </h1>
          <div className={styles.topCompaniesCards}>
            <div className={styles.cardLogo}>
              <h2>Logo</h2>
            </div>
            <div className={styles.cardLogo}>
              <h2>Logo</h2>
            </div>
            <div className={styles.cardLogo}>
              <h2>Logo</h2>
            </div>
            <div className={styles.cardLogo}>
              <h2>Logo</h2>
            </div>
            <div className={styles.cardLogo}>
              <h3>Logo</h3>
            </div>
          </div>
        </div>
        <div className={styles.courseBenefits}>
          <h1>
            <span>Unlock</span> <span>6 Certificates </span> <span>&</span>{" "}
            <span>Internship Opportunities!</span>
          </h1>
          <div className={styles.panels}>

            <div className={styles.leftPanel}>
              <h3>Get 6 Industry Recognized Certificates! </h3>
              <img src={Certificate} alt="certificate" />
              <div className={styles.leftPanelChips}>
                <span> Official and Verified </span>
                <span> Enhances Credibility </span>
              </div>
            </div>

            <div className={styles.rightPanel}>
              <h3>Bag Internship Opportunities !</h3>
              <p>
                With every course, we make you not only industry-reacy but also
                help you crack your first internship.
              </p>
              <img src={Abcd} alt="pic" />
            </div>
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Testimonials;
