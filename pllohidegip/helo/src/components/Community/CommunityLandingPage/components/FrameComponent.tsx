import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  howItWorks?: string;
  underline?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  howItWorks,
  underline,
  propWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.headingWrapper} style={frameDivStyle}>
      <div className={styles.heading}>
        <h1 className={styles.howItWorks}>{howItWorks}</h1>
        <img className={styles.underlineIcon} alt="" src={underline} />
      </div>
    </div>
  );
};

export default FrameComponent;
