import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import ButtonWrapper from "./ButtonWrapper";
import styles from "./Heading.module.css";

const Heading: FunctionComponent = () => {
  return (
    <div className={styles.heading}>
      <div className={styles.text}>
        <FrameComponent
          howItWorks="How It Works?"
          underline="/underline-1.svg"
        />
        <ButtonWrapper
          connectSvgrepocom="/connect-svgrepocom.svg"
          heading3SaveMoreEnergy="Connect"
          joinADynamicCommunityOfIn="Join a dynamic community of industry professionals united by a shared passion for innovation and sustainability."
        />
        <ButtonWrapper
          connectSvgrepocom="/collaborate-svgrepocom.svg"
          heading3SaveMoreEnergy="Collaborate"
          joinADynamicCommunityOfIn="Share ideas, access a diverse range of materials, and collaborate on projects with ease."
        />
        <ButtonWrapper
          connectSvgrepocom="/create-svgrepocom.svg"
          heading3SaveMoreEnergy="Create"
          joinADynamicCommunityOfIn="Harness the power of our intuitive tools and resources to bring your creative vision to life."
        />
        <ButtonWrapper
          connectSvgrepocom="/poweroff-svgrepocom.svg"
          heading3SaveMoreEnergy="Empower"
          joinADynamicCommunityOfIn="Empower your business to thrive with unparalleled efficiency, creativity, and sustainability."
        />
      </div>
      <div className={styles.text1}>
        <div className={styles.group}>
          <div className={styles.photo}>
            <div className={styles.bg} />
            <img
              className={styles.closeUpOnEngravingArtTool}
              alt=""
              src="/close-up-on-engraving-art-tools@2x.png"
            />
          </div>
          <div className={styles.photo1}>
            <div className={styles.bg1} />
            <img
              className={styles.maleDesignerAndLeatherTail}
              loading="lazy"
              alt=""
              src="/male-designer-and-leather-tailor-working-at-a-factory-close-up@2x.png"
            />
          </div>
        </div>
        <div className={styles.photo2}>
          <div className={styles.designHub}>
            <div className={styles.bg2} />
            <img
              className={styles.manInAStudioCreatesLeathe}
              loading="lazy"
              alt=""
              src="/man-in-a-studio-creates-leather-ware@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
