import React from "react";
import styles from "./MainArticle.module.scss";

export default function MainArticle({ title, description, image }) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.textContainer}>
        <div
          className={styles.categorie}
          style={{ color: "#5c2d91", fontSize: "16px" }}
        >
          كأس الاتحاد الإنجليزي
        </div>
        <div
          className={styles.title}
          style={{ fontSize: "28px", fontWeight: 900 }}
        >
          {title}
        </div>
        {/* <p style={{ fontSize: "18px", margin: 0 }}>{description}</p> */}
      </div>
    </div>
  );
}
