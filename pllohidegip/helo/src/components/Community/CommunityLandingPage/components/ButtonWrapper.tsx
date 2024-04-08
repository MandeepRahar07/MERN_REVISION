import { FunctionComponent } from "react";
import styles from "./ButtonWrapper.module.css";

export type ButtonWrapperType = {
  connectSvgrepocom?: string;
  heading3SaveMoreEnergy?: string;
  joinADynamicCommunityOfIn?: string;
};

const ButtonWrapper: FunctionComponent<ButtonWrapperType> = ({
  connectSvgrepocom,
  heading3SaveMoreEnergy,
  joinADynamicCommunityOfIn,
}) => {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.divicon}>
        <img
          className={styles.connectSvgrepocomIcon}
          alt=""
          src={connectSvgrepocom}
        />
      </button>
      <div className={styles.maskGroup}>
        <b className={styles.heading3}>{heading3SaveMoreEnergy}</b>
        <div className={styles.joinADynamic}>{joinADynamicCommunityOfIn}</div>
      </div>
    </div>
  );
};

export default ButtonWrapper;
