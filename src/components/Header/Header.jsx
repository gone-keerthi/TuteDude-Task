import React from "react";
import styles from './header.module.css';
import { useState } from "react";
const Header = () => {
  const [signupActive, setSignupActive] = useState(false);

  const handleLoginClick = () => {
    alert("Login button clicked!");
  };

  const handleSignupClick = () => {
    alert("Signup button clicked!");
    setSignupActive(true);
  };
  return (
    <>
      <div className={styles.headerComponent}>
        <div className={styles.leftContent}>
          <p>Logo</p>
        </div>
        <div className={styles.rightContent}>
          <button  onClick={handleLoginClick}>Login</button>
          <button onClick={handleSignupClick} className={signupActive ? styles.active : ''}>Signup</button>
        </div>
      </div>
    </>
  );
};

export default Header;
