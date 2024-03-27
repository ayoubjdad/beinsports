import React from "react";
import styles from "./Input.module.scss";
import cn from "classnames";

export default function Input({ type, key, placeholder, value, setValue }) {
  return (
    <input
      type={type || "text"}
      name={key}
      placeholder={placeholder}
      className={styles.input}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export function InputTextArea({ type, key, placeholder, value, setValue }) {
  return (
    <textarea
      type={type || "text"}
      name={key}
      placeholder={placeholder}
      className={cn(styles.input, styles.textarea)}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
