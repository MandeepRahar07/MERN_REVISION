import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SocialMediaLogos.module.css";

export type SocialMediaLogosType = {
  closeUpOfAShoemakerMeasur?: string;
  enhancedCollaboration?: string;
  connectDesignersSuppliers?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propPadding?: CSSProperties["padding"];
  propHeight1?: CSSProperties["height"];
};

const SocialMediaLogos: FunctionComponent<SocialMediaLogosType> = ({
  closeUpOfAShoemakerMeasur,
  enhancedCollaboration,
  connectDesignersSuppliers,
  propWidth,
  propHeight,
  propPadding,
  propHeight1,
}) => {
  const closeUpOfAShoemakerMeasurStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const connectDesignersSuppliersStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  return (
    <div className={styles.socialMediaLogos}>
      <div className={styles.photo}>
        <div className={styles.bg} />
        <img
          className={styles.closeUpOfAShoemakerMeasur}
          loading="lazy"
          alt=""
          src={closeUpOfAShoemakerMeasur}
          style={closeUpOfAShoemakerMeasurStyle}
        />
      </div>
      <div className={styles.rectangleParent} style={frameDiv1Style}>
        <div className={styles.frameChild} />
        <h3 className={styles.enhancedCollaboration}>
          {enhancedCollaboration}
        </h3>
        <div
          className={styles.connectDesignersSuppliers}
          style={connectDesignersSuppliersStyle}
        >
          {connectDesignersSuppliers}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLogos;
