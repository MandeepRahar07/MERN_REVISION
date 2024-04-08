import { FunctionComponent } from "react";
import styles from "./Team.module.css";

const Team: FunctionComponent = () => {
  return (
    <div className={styles.team}>
      <div className={styles.photo}>
        <div className={styles.bg} />
        <img
          className={styles.leatherBagForTravelWithHe}
          loading="lazy"
          alt=""
          src="/leather-bag-for-travel-with-headphones-and-camera@2x.png"
        />
      </div>
      <div className={styles.elementMargin}>
        <div className={styles.headerGroup}>
          <h1 className={styles.aboutUs}>About Us</h1>
          <img
            className={styles.underlineIcon}
            loading="lazy"
            alt=""
            src="/underline.svg"
          />
        </div>
        <div className={styles.plloHideIsContainer}>
          <p className={styles.plloHideIs}>
            Pllo Hide is dedicated to revolutionizing the leather industry
            through a fusion of cutting-edge technology and traditional
            artisanal skills. Our innovative platform serves as a nexus for
            designers, suppliers, and manufacturers, fostering effortless
            cooperation and championing sustainable methodologies.
          </p>
          <p className={styles.embraceTheOpportunity}>
            Embrace the opportunity to be part of our journey as we spearhead
            the transition towards a future that harmonizes innovation. Join us
            in pioneering a paradigm shift towards a more dynamic era in leather
            production.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
