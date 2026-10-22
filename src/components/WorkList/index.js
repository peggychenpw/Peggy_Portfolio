import React from "react";
import styles from "./WorkList.module.scss";

export default function WorkList({ dataSource = [] }) {
  return (
    <div className={styles.worklist}>
      {dataSource.map((item) => (
        <article className={`${styles.project} ${styles[item.className] || ""}`} key={item.id}>
          <a className={styles.projectLink} href={item.link} target="_blank" rel="noopener noreferrer" aria-label={`${item.title} — view ${item.client} project (opens in a new tab)`}>
            <div className={`${styles.cover} ${item.imagePosition === "top" ? styles.alignTop : ""} ${item.imageFit === "contain" ? styles.containImage : ""}`}>
              <img src={`${process.env.PUBLIC_URL}${item.cover}`} alt={item.alt} loading="lazy" />
              <span className={styles.openIcon} aria-hidden="true">↗</span>
            </div>
            <div className={styles.workbrief}>
              <div className={styles.projectMeta}><span>{item.client}</span><span>{item.year}</span></div>
              <h3>{item.title}</h3>
              <p>{item.brief}</p>
              <span className={styles.projectType}>{item.type}</span>
            </div>
          </a>
        </article>
      ))}
    </div>
  );
}
