"use client";

import { random } from "lodash";
import styles from "./AnimatedClouds.module.css";

const CSSCloud = () => {
  return (
    <div>
      <div className={styles.cloud} />
      <div className={`${styles.cloud} ${styles.shadow}`} />
    </div>
  );
};

export default CSSCloud;
