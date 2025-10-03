import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "work.module.scss";
import datas from "../works";
import WorkList from "../../components/WorkList/index";

const WorkPage = () => {
  const history = useHistory();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        history.push("/about");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [history]);

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
