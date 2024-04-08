import { FunctionComponent } from "react";
import styles from "./MaskGroup.module.css";
import Navbar from "./Navbar";

const MaskGroup: FunctionComponent = () => {
  return (
    <section className={styles.maskGroup}>
      <div className={styles.untitledDesign341Parent}>
        <img
          className={styles.untitledDesign341}
          alt=""
          src="/untitled-design-34-1@2x.png"
        />
        <div className={styles.community} />
        <Navbar />
        <div className={styles.ourService}>
          <h1 className={styles.redefiningLeatherCraftsmansh}>
            Redefining Leather Craftsmanship
          </h1>
          <h3 className={styles.yourJourneyBegins}>
            Your Journey Begins with PlloHide
          </h3>
        </div>
      </div>
    </section>
  );
};

export default MaskGroup;
