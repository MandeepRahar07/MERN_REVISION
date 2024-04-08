import { FunctionComponent } from "react";
import styles from "./FrameSet.module.css";

const FrameSet: FunctionComponent = () => {
  return (
    <section className={styles.frameSet}>
      <div className={styles.frameParent}>
        <div className={styles.base} />
        <div className={styles.maskGroupWrapper}>
          <img
            className={styles.maskGroupIcon}
            loading="lazy"
            alt=""
            src="/mask-group@2x.png"
          />
        </div>
        <div className={styles.maskGroupContainer}>
          <img
            className={styles.maskGroupIcon1}
            alt=""
            src="/mask-group-1@2x.png"
          />
        </div>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionContent}>
            <div className={styles.textCommunity}>
              <h1 className={styles.community}>Community</h1>
              <img
                className={styles.underlineIcon}
                alt=""
                src="/underline-3.svg"
              />
            </div>
            <div className={styles.sectionJoin}>
              <div className={styles.joinOurVibrantContainer}>
                <p className={styles.joinOurVibrant}>
                  Join our vibrant community at Piio Hide, uniting designers,
                  artisans, and leather enthusiasts. Connect with like-minded
                  professionals to share ideas and inspiration, fostering
                  collaboration and creativity. Gain access to exclusive events,
                  workshops, and resources tailored to furthering your craft.
                  Sign up now to get regular updates on the latest trends and
                  upcoming events, and let's elevate the artistry and innovation
                  within the leather industry together.
                </p>
              </div>
              <div className={styles.background}>
                <div className={styles.shadow} />
                <div className={styles.fill} />
                <button className={styles.label}>Explore More</button>
                <div className={styles.iconWrapper}>
                  <div className={styles.icon}>{'>'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameSet;
