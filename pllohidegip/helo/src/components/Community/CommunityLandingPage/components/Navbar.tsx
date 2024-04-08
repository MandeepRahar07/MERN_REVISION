// import { FunctionComponent } from "react";
import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.divelementorbackgroundoverlay}>
        <img
          className={styles.headingIcon}
          loading="lazy"
          alt=""
          src="/22@2x.png"
        />
        <div className={styles.reduceCarbonFootprint}>
          <div className={styles.fAQCards}>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.howItWorks}>How It Works?</div>
            <div className={styles.ourFeature}>Our Feature</div>
            <div className={styles.community1}>Community</div>
            <div className={styles.team}>Team</div>
            <div className={styles.faq}>FAQ</div>
          </div>
        </div>
        <button className={styles.getStarted}>
          <div className={styles.logIn}>Log In</div>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
