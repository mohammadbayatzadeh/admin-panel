import React from "react";
import styles from "./Message.module.css";
import { VscWatch } from "react-icons/vsc";
import { usersData } from "../../data/users/usersData";
// import pic1 from "../../data/users/2.jpg";
function Message() {
  const data = usersData;
  return (
    <div className={styles.container}>
      <img src={require(`../../data/users/${Math.floor(Math.random() * 10+1)}.jpg`)} alt="profile " />
      <div>
        <p className={styles.top}>
          {data[Math.floor(Math.random() * 10)].name}
        </p>
        <p className={styles.down}>
          {data[Math.floor(Math.random() * 10)].company.catchPhrase}
        </p>
        <p className={styles.down}>
          <VscWatch />
          {Math.floor(Math.random() * 60)} mins ago
        </p>
      </div>
    </div>
  );
}

export default Message;
