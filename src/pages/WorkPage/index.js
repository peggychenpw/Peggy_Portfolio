import React from "react";
import styles from "./work.module.scss";
import datas from "../works";
import WorkList from "../../components/WorkList/index";

const WorkPage = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.title}>
        <h3><span>Recent Work</span></h3>
      </div>
      <WorkList dataSource={datas.data}></WorkList>
    </div>
  );
};

export default WorkPage;
