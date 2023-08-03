import React from "react";

//styles
import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default Loading;
