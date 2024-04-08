import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import SocialMediaLogos from "./SocialMediaLogos";
import styles from "./PlantTypes.module.css";

const PlantTypes: FunctionComponent = () => {
  return (
    <section className={styles.plantTypes}>
      <div className={styles.communityQr}>
        <FrameComponent
          howItWorks="Our Features"
          underline="/underline-2.svg"
          propWidth="272px"
        />
        <div className={styles.ourService}>
          <div className={styles.exploreOurUnique}>
            Explore our unique qualities and elevate your style .
          </div>
        </div>
        <div className={styles.connectPlatform}>
          <SocialMediaLogos
            closeUpOfAShoemakerMeasur="/close-up-of-a-shoemaker-measuring-and-cutting-leather@2x.png"
            enhancedCollaboration="Enhanced Collaboration"
            connectDesignersSuppliers="Connect designers, suppliers, and manufacturers seamlessly, fostering collaboration and innovation at every stage of the process."
          />
          <SocialMediaLogos
            closeUpOfAShoemakerMeasur="/man-in-a-studio-creates-leather-ware-1@2x.png"
            enhancedCollaboration="Streamlined Processes"
            connectDesignersSuppliers="From ideation to production, our platform simplifies workflows, eliminating inefficiencies and maximizing productivity."
            propWidth="359px"
            propHeight="239.1px"
            propPadding="var(--padding-smi) var(--padding-2xs) var(--padding-22xl) var(--padding-mid)"
            propHeight1="unset"
          />
          <div className={styles.socialMediaLogos}>
            <div className={styles.photo}>
              <div className={styles.bg} />
              <img
                className={styles.tailorCuttingLeatherWithSc}
                loading="lazy"
                alt=""
                src="/tailor-cutting-leather-with-scissors@2x.png"
              />
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.sustainablePracticesWrapper}>
                <h3 className={styles.sustainablePractices}>
                  Sustainable Practices
                </h3>
              </div>
              <div className={styles.ourPlatformPrioritizes}>
                Our platform prioritizes sustainability, offering eco-friendly
                solutions without compromising quality, driving positive change
                for the environment and the industry.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantTypes;
