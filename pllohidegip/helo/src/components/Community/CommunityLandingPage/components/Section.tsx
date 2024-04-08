import { FunctionComponent } from "react";
import styles from "./Section.module.css";

const Section: FunctionComponent = () => {
  return (
    <section className={styles.section}>
      <img
        className={styles.maleDesignerAndLeatherTail}
        alt=""
        src="/male-designer-and-leather-tailor-working-at-a-factory-close-up@2x.png"
      />
      <div className={styles.divelementorBackgroundOverl} />
      <div className={styles.section1}>
        <div className={styles.divelementorElementmargin}>
          <div className={styles.heading2}>
            <h1 className={styles.craftingTimelessElegance}>
              Crafting Timeless Elegance with Ethical Ingenuity
            </h1>
          </div>
        </div>
        <div className={styles.divelementorElementmargin1}>
          <div className={styles.heading5Container}>
            <span>
              <p className={styles.blankLine}>
                <b>&nbsp;</b>
              </p>
              <p className={styles.fromTraditionTo}>
                From Tradition to Tomorrow - Pioneering Leather Innovation
              </p>
            </span>
          </div>
        </div>
        <div className={styles.divelementorButtonWrapper}>
          <button className={styles.ourServiceFrame}>
            <div className={styles.getStarted}>GET STARTED</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section;
