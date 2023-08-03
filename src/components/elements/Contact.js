import React from "react";

//styles
import styles from "./Contact.module.css";

//chart
import WordChart from "./charts/WordChart";

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.left}>
          <img
            src={require("../../data/users/profile.jpeg")}
            alt="mohammad bayatzadeh"
          />
          <p>Mohammad Bayatzadeh</p>
          <p>Front-End developer</p>
        </div>
        <div className={styles.right}>
          <p className={styles.head}>Information</p>
          <div className={styles.part}>
            <span className={styles.line}></span>
            <p className={styles.head}>bio</p>
            <p>
              Self-studied Front-End developer with 1 year exprience with
              Reactjs, Nextjs frameworks.
            </p>
          </div>
          <div className={styles.part}>
            <p className={styles.head}>Contact Me</p>
            <span className={styles.line}></span>
            <p className={styles.head}>email</p>
            <p>mamadbayat777@gmail.com</p>
          </div>
          <div className={styles.part}>
            <p className={styles.head}>number</p>
            <p>+989368376614</p>
          </div>
        </div>
        <WordChart />
      </div>
    </div>
  );
}

export default Contact;
