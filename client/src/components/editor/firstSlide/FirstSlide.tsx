import React from "react";
import styles from "./firstSlide.module.scss";

interface FirstSlideProps {
  manuscriptsLength: number;
}

export function FirstSlide({ manuscriptsLength }: FirstSlideProps) {
  interface BoxProps {
    header: string;
    content: number;
  }

  const Box: React.FC<BoxProps> = ({ header, content }) => {
    return (
      <div className={styles.editorBox}>
        <h3>{header}</h3>
        <p>
          {content} {header.toLowerCase()}
        </p>
      </div>
    );
  };

  return (
    <div className={styles.firstSlide}>
      <Box header="Manuscripts" content={manuscriptsLength} />
      <Box header="Authors" content={4} />
      <Box header="Reviewers" content={4} />
    </div>
  );
}
