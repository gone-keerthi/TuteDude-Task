import React from 'react'
import styles from './enrollment.module.css'

const EnrollmentCard = () => {
  return (
    <React.Fragment>
        <div className={styles.enrollmentCardComponent}>
            <div className={styles.leftColumn}> 
                <h1>
                    Enroll For DataScience Bundle @$1,499 <span> $2,600</span>
                </h1>
                <p>Become an Expert in the data science field by enrolling into 6 Extensive courses! </p>
                <button>Enroll Now</button>
            </div>
            <div className={styles.rightColumn}>
                <div>

                <p>Total number of Courses <strong>6</strong></p>
                {/* <strong>6</strong> */}

                <p>Total number of Certificates <strong>6</strong></p>
                {/* <strong>6</strong> */}

                <p>Access to Courses <strong>Lifetime</strong></p>
                {/* <strong>Lifetime</strong> */}
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default EnrollmentCard