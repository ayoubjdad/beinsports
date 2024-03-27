import React from "react";
import styles from "./Button.module.scss";

export default function Button({ icon, title, style }) {
  return (
    <div style={{ ...style }} className={styles.button}>
      {title}
      {icon}
    </div>
  );
}
