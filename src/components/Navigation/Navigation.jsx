import React from 'react'
import styles from './navigation.module.css'
const Navigation = () => {
  return (
    <>
    <div className={styles.navigationComponent}>
        <ul>
            <li> Overview </li>
            <li> Curriculum </li>
            <li> Refund </li>
            <li> Testimonials </li>
        </ul>
    </div>
    </>
  )
}

export default Navigation