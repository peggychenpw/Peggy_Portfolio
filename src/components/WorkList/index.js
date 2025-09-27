import React from "react";
import styles from "./WorkList.module.scss";

export default ({ dataSource }) => {
  return (
    <div className={styles.worklist}>
      <ul>
        {dataSource &&
          dataSource.map((item) => (
            <li key={item.id}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className={styles.cover}>
                  <img src={item.cover && item.cover.startsWith("http") ? item.cover : `${process.env.PUBLIC_URL}${item.cover && item.cover.startsWith("/") ? item.cover : `/${item.cover}`}` } alt="workImg" />
                </div>
                <div className={styles.workbrief}>
                  <h3>{item.title}</h3>
                  <p>{item.brief}</p>
                  {item.tags && item.tags.length > 0 && (
                    <div className={styles.tag}>
                      {(item.tags || []).slice(0, 6).map((i) => (
                        <span key={i}>{i}</span>
                      ))}
                    </div>
                  )}
                </div>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};
