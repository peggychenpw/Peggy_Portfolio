import React from "react";

const AboutPage = () => {
  return (
    <div style={{ width: "70%", margin: "0 auto", padding: "48px 0 80px" }}>
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
  );
};

export default AboutPage;


