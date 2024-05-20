// import React from "react";
// import styles from "./programplan.module.css";

// const ProgramPlan = () => {
//   return (
//     <>
//       <div className={styles.programPlanContainer}>
//         <div className={styles.programPlanHeader}>
//           <h1>How does the Internship Program works?</h1>
//         </div>
// <div className={styles.listGroup}>

//         <ul>
//             <li>1</li>
//             <li>2</li>
//             <li>3</li>
//             <li>4</li>
//             <li>5</li>
//         </ul>
// </div>

//         {/* <div className={styles.progressBar}>

//           <div className={styles.step}>
//             <p>Name</p>
//             <div className={styles.bullet}>
//               <span>1</span>
//             </div>
//             <div className={styles.check}></div>
//           </div>

//           <div className={styles.step}>
//             <p>Name</p>
//             <div className={styles.bullet}>
//               <span>1</span>
//             </div>
//             <div className={styles.check}></div>
//           </div>

//           <div className="step">
//             <p>Name</p>
//             <div className="bullet">
//               <span>1</span>
//             </div>
//             <div className="check fas fa-check"></div>
//           </div>
//         </div> */}
//         {/* <div className={styles.programPlanContent}>
//            <div className={styles.programPlanBox}>
//                <img src="box1.png" alt="" />
//                <p>Learn from our structured pre recorded courses made by experts to meet industry needs</p>
//            </div>
//            <div className={styles.programPlanBox}>
//                <img src="box2.png" alt="" />
//                <p>Personal mentors to guide and help you throughout your journey as a friend</p>
//            </div>
//            <div className={styles.programPlanBox}>
//                <img src="box3.png" alt="" />
//                <p>Get guaranteed paid internships after completion of the program along with course completion certificates</p>
//            </div>
//            <div className={styles.programPlanBox}>
//                <img src="box4.png" alt="" />
//                <p>1:1 live doubt solving support available throughout the day to clear your doubts instantly</p>
//            </div>
//            <div className={styles.programPlanBox}>
//                <img src="box5.png" alt="" />
//                <p>Build major projects which makes your resume stand apart</p>
//            </div>
//        </div> */}
//         {/* <button className={styles.cta}>Apply now for ₹ 2999</button> */}
//       </div>
//     </>
//   );
// };

// export default ProgramPlan;

import React from "react";
import "./programplan.css";

import { BsImageAlt } from "react-icons/bs";

const ProgramPlan = () => {
  return (
    <div className="programPlanComponent">
      <div className="programPlanComponentTitle">
        <p>How does the Internship Program works ?</p>
      </div>
      <div class="timeline">
        <ul>
          <li>
            <div className="bullet">
              <p><BsImageAlt /></p>
            </div>
            <div className="content">
              <p>
                Learn from our structured pre recorded courses made by experts
                to meet industry needs
              </p>
            </div>
          </li>
          <li>
            <div className="bullet">
              <p><BsImageAlt /></p>
            </div>
            <div className="content">
              <p>
                1:1 live doubt solving support available throughout the day to
                clear your doubts instantly{" "}
              </p>
            </div>
          </li>
          <li>
            <div className="bullet">
              <p><BsImageAlt /></p>
            </div>
            <div className="content">
              <p>
                Personal mentors to guide and help you throughout your journey
                as a friend
              </p>
            </div>
          </li>
          <li>
            <div className="bullet">
              <p><BsImageAlt /></p>
            </div>
            <div className="content">
              <p>Build major projects which makes your resume stand apart</p>
            </div>
          </li>
          <li>
            <div className="bullet">
              <p><BsImageAlt /></p>
            </div>
            <div className="content">
              <p>
                Get guaranteed paid internships after completion of the program
                along with course completion certificates
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="programPlanCta">
            <button className="apply-btn">Apply now for ₹ 2999</button>
        </div>
    </div>
  );
};

export default ProgramPlan;
