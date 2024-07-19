import React from "react";
import styles from "./SubArticle.module.scss";

export default function SubArticle({ categorie, title, image, key }) {
  return (
    <div key={key} className={styles.container}>
      <img
        alt={title}
        src={image}
        decoding="async"
        data-nimg="fill"
        loading="lazy"
        className={styles.image}
      />
      <div className={styles.textContainer}>
        <div style={{ color: "#5c2d91", fontSize: "16px" }}>{categorie}</div>
        <p style={{ fontSize: "18px", margin: 0 }}>{title}</p>
      </div>
    </div>
  );
}
