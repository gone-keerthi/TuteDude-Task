import React from "react";
import styles from "./refund.module.css";
import Pic from './image 533.png'
const Refund = () => {
  // const Time = new Date();
  return (
    <>
      <div className={styles.refundComponent}>
        <h1>
          <span>Don't miss out on this </span>{" "}
          <span> limited-time opportunity </span> <span> to learn for </span>{" "}
          <span> Free!</span>
        </h1>

        <div className={styles.offerCard}>
          <h2>100% Refund Offer 😎 </h2>
          <input className={styles.slider} type="range" id="range"  min={0} max={100} value={25} />
          <label for="range"></label>
          <p>Offer ends in 10:00 Mins</p>
        </div>

        <h2> How does it work? </h2>

        <div className={styles.courseCheckoutPlan}>
          <div className={styles.checkoutChips}>

            <span className={styles.highlighter}>Step 1</span>

            <div className={styles.checkoutStepOne}>
              <p>Step 1: Enroll into your favorite course for only $1,499 </p>
              <img src={Pic} alt="pic" />
              <p>Start Learning with <strong>Lifetime Course Access.</strong>  </p>
            </div>
          </div>

          <div className={styles.checkoutChips}>
            <span className={styles.highlighter}>Step 2</span>
            <div className={styles.checkoutStepTwo}>
              <p>Step 2: Complete Course & Assignments within 2 Years!</p>
              <div>
                <span> 2 </span>
                <span> years time from the date of enrollment </span>
              </div>
              <p> Finish the course within <strong> 2 Years  </strong> to Qualify for Refund. </p>
            </div>
          </div>

          <div className={styles.checkoutChips}>
            <span className={styles.highlighter}>Step 3</span>
            <div className={styles.checkoutStepThree}>
              <p>Step 3: Receive 100% Refund upon completion </p>
              <div>
                <span>100% </span>
                <span> Enrollment Fee is refunded </span>
              </div>
              <p>
                
                Upon Course Completion within <strong> 2 Years </strong>, Get Your <strong> $1,499 Back.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Refund;
