import { FunctionComponent } from "react";
import MaskGroup from "../components/MaskGroup";
import Team from "../components/Team";
import Heading from "../components/Heading";
import PlantTypes from "../components/PlantTypes";
import FrameSet from "../components/FrameSet";
import FAQCardContainer from "../components/FAQCardContainer";
import Section from "../components/Section";
import GroupComponent from "../components/GroupComponent";
import styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPage}>
      <MaskGroup />
      <section className={styles.pricing}>
        <Team />
        <Heading />
      </section>
      <PlantTypes />
      <FrameSet />
      <section className={styles.frameParent}>
        <div className={styles.fAQTitleParent}>
          <div className={styles.fAQTitle}>
            <h1 className={styles.frequentlyAskedQuestions}>
              Frequently Asked Questions
            </h1>
            <img
              className={styles.underlineIcon}
              alt=""
              src="/underline-4.svg"
            />
          </div>
          <div className={styles.answersToCommonContainer}>
            <p className={styles.answersToCommon}>Answers to Common Queries</p>
            <p className={styles.findQuickSolutions}>
              Find Quick Solutions to Your Inquiries Here.
            </p>
          </div>
        </div>
        <FAQCardContainer />
      </section>
      <Section />
      <GroupComponent />
    </div>
  );
};

export default LandingPage;
