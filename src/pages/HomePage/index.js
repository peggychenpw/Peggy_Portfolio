
import React, { useRef } from "react";
import styles from "./home.module.scss";
import datas from "../works.json";
import WorkList from "../../components/WorkList";


const HomePage = () => {
  const workRef = useRef(null);
  const aboutRef = useRef(null);


  return (
    <div className={styles.wrap}>
      <div className={styles.brief}>
        <div className={styles.avatar}>
          <img src={`${process.env.PUBLIC_URL}/image/myPhoto.png`} alt="Peggy Chen" />
        </div>
        <h1>Hi! I’m Peggy, a UX developer who gets good ideas shipped.</h1>
        <h2>I transform complex problems into helpful, enjoyable products.</h2>
  <p className={styles.sub}>I’m also a photographer / a curious learner / based in San Jose, CA</p>
      </div>
  {/* Recent WORK 區塊 */}
  <div ref={workRef} id="recent-work-section" style={{ marginTop: 80 }}>
        <div className={styles.work}>
          <div className={styles.title}>
            <h3><span>Recent Works</span></h3>
          </div>
          <WorkList dataSource={datas.data} />
        </div>
      </div>
  {/* About 區塊 */}
  <div ref={aboutRef} id="about-section" style={{ marginTop: 80, width: "70%", margin: "0 auto", padding: "48px 0 80px" }}>
        <div style={{ width: 96, height: 96, borderRadius: 999, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", marginBottom: 12 }}>
          <img src={`${process.env.PUBLIC_URL}/image/myPhoto.png`} alt="Peggy Chen" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <h1 style={{ fontSize: 32, marginBottom: 12 }}>About</h1>
        <p style={{ color: "#444", marginBottom: 10 }}>
          I’m Peggy Chen, a UX developer focused on building simple, enjoyable products.
        </p>
        <p style={{ color: "#444", marginBottom: 10 }}>
          I care about performance, accessibility, and thoughtful UI.
        </p>
        <p style={{ color: "#444", marginBottom: 10 }}>
          Open to HCI / UX and UX Engineer opportunities
        </p>
        <p style={{ color: "#444", marginBottom: 10 }}>
          Contact: <a href="mailto:peggy.chen.pw@gmail.com">peggy.chen.pw@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
