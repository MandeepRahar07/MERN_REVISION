import { FunctionComponent } from "react";
import styles from "./GroupComponent.module.css";

const GroupComponent: FunctionComponent = () => {
  return (
    <section className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.content}>
        <div className={styles.plantWateringAdvice}>
          <img className={styles.contentGroupIcon} alt="" src="/22-1@2x.png" />
          <div className={styles.phenvelopeFillParent}>
            <img
              className={styles.phenvelopeFillIcon}
              loading="lazy"
              alt=""
              src="/phenvelopefill.svg"
            />
            <div className={styles.piiohidecompanyca}>PIIoHide@company.ca</div>
          </div>
          <div className={styles.phphoneCallFillParent}>
            <img
              className={styles.phphoneCallFillIcon}
              loading="lazy"
              alt=""
              src="/phphonecallfill.svg"
            />
            <div className={styles.div}>(021) 876 347 294</div>
          </div>
          <div className={styles.phoneandEmailFrame}>
            <img
              className={styles.phmapPinLineFillIcon}
              loading="lazy"
              alt=""
              src="/phmappinlinefill.svg"
            />
            <div className={styles.ranchview7658764DrContainer}>
              <p className={styles.ranchview}>{`3891 Ranchview `}</p>
              <p className={styles.drRichardson}>765-8764 Dr. Richardson</p>
              <p className={styles.california62639}>California 62639</p>
            </div>
          </div>
        </div>
        <div className={styles.ourServiceSection}>
          <h3 className={styles.ourService}>Our Service</h3>
          <div className={styles.aboutUsHowItWorksOurFeat}>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.howItWorks}>How It Works?</div>
            <div className={styles.ourFeatures}>Our Features</div>
            <div className={styles.community}>Community</div>
          </div>
        </div>
        <div className={styles.moreLinksFrame}>
          <h3 className={styles.moreLinks}>More Links</h3>
          <div className={styles.pricingTeamFAQFrame}>
            <div className={styles.pricing}>Pricing</div>
            <div className={styles.team}>Team</div>
            <div className={styles.faq}>FAQ</div>
          </div>
        </div>
        <div className={styles.platformConnectLogo}>
          <h3 className={styles.platformConnect}>Platform Connect</h3>
          <div className={styles.platformLogos}>
            <div className={styles.ig}>
              <img
                className={styles.phinstagramLogoFillIcon}
                loading="lazy"
                alt=""
                src="/phinstagramlogofill.svg"
              />
            </div>
            <div className={styles.yt}>
              <img
                className={styles.phyoutubeLogoFillIcon}
                loading="lazy"
                alt=""
                src="/phyoutubelogofill.svg"
              />
            </div>
            <div className={styles.tw}>
              <img
                className={styles.phtwitterLogoFillIcon}
                loading="lazy"
                alt=""
                src="/phtwitterlogofill.svg"
              />
            </div>
            <div className={styles.fb}>
              <img
                className={styles.phfacebookLogoFillIcon}
                loading="lazy"
                alt=""
                src="/phfacebooklogofill.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.copyrightInfoWrapper}>
        <div className={styles.copyrightInfo}>
          <div className={styles.copyrightPllohideAll}>
            @ Copyright PlloHide. All Rights Reserved
          </div>
        </div>
      </footer>
    </section>
  );
};

export default GroupComponent;
