
import React, { useRef, useEffect } from "react";
import styles from "./home.module.scss";
import datas from "../works.json";
import WorkList from "../../components/WorkList";

const HomePage = () => {
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  // 滾動偵測
  useEffect(() => {
    const handleScroll = () => {
      if (workRef.current && window.scrollY > 200 && window.scrollY < 800) {
        workRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (aboutRef.current && window.scrollY >= 800) {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {/* Recent WORK 區塊 */}
      <div ref={workRef} style={{ marginTop: 80 }}>
        <div className={styles.work}>
          <div className={styles.title}>
            <h3><span>Recent Work</span></h3>
          </div>
          <WorkList dataSource={datas.data} />
        </div>
      </div>
      {/* About 區塊 */}
      <div ref={aboutRef} style={{ marginTop: 80, width: "70%", margin: "0 auto", padding: "48px 0 80px" }}>
        <div style={{ width: 96, height: 96, borderRadius: 999, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", marginBottom: 12 }}>
          <img src={`${process.env.PUBLIC_URL}/image/myPhoto.png`} alt="Peggy Chen" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <h1 style={{ fontSize: 32, marginBottom: 12 }}>About</h1>
        <p style={{ color: "#444", marginBottom: 10 }}>
          I’m Peggy, a front-end developer focused on building simple, enjoyable products.
        </p>
        <p style={{ color: "#444", marginBottom: 10 }}>
          I care about performance, accessibility, and thoughtful UI.
        </p>
        <p style={{ color: "#444", marginBottom: 10 }}>
          Based in Taipei. Contact: <a href="mailto:peggy.chen.pw@gmail.com">peggy.chen.pw@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
