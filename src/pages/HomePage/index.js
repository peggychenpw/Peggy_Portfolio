import React from "react";
import styles from "./home.module.scss";


export default () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.brief}>
        <div className={styles.avatar}>
          <img src={`${process.env.PUBLIC_URL}/image/myPhoto.png`} alt="Peggy Chen" />
        </div>
        <h1>Hi! I’m Peggy, a front-end developer who gets good ideas shipped.</h1>
        <h2>I transform complex problems into helpful, enjoyable products.</h2>
        <p className={styles.sub}>I’m also a photographer / a curious learner / based in Taipei</p>
      </div>
    </div>
  );
};
