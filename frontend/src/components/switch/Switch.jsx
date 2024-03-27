import React from "react";
import styles from "./Switch.module.scss";
import cn from "classnames";

export default function Switch({ type, key, placeholder, value, setValue }) {
  return (
    <div className={styles.container}>
      <label className={styles.switch}>
        <input
          type={"checkbox"}
          // name={key}
          // placeholder={placeholder}
          className={styles.input}
          // value={value}
          // onChange={(e) => setValue(e.target.value)}
        />
        <span className={cn(styles.slider, styles.round)} />
      </label>

      <span>نشر</span>
    </div>
  );
}
