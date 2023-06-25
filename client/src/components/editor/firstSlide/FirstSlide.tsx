import React from "react";
import styles from "./firstSlide.module.scss";

export function FirstSlide() {
  interface BoxProps {
    header: string;
    content: number;
  }
  const Box: React.FC<BoxProps> = ({ header, content }) => {
    return (
      <div className={styles.editorBox}>
        <h3>{header}</h3>
        <p>{content + " " + header.toLocaleLowerCase()}</p>
      </div>
    );
  };
  return (
    <div className={styles.firstSlide}>
      <Box header='Manuscripts' content={4} />
      <Box header='Authors' content={4} />
      <Box header='Reviewers' content={4} />
    </div>
  );
}
