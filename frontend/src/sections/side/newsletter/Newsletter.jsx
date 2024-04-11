import React from "react";
import styles from "./Newsletter.module.scss";

export default function Newsletter() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img
          alt="img"
          src="https://www.beinsports.com/images/newsletter.png"
          className={styles.image}
        />
        <div className={styles.text}>
          <div className={styles.title}>انضم إلى قائمة نشرتنا الإخبارية</div>
          <div className={styles.description}>
            اشترك للحصول على محتوى حصري وتحديثات منتقاة
          </div>
        </div>
      </div>
      <input
        type="text"
        placeholder="أدخل بريدك الإلكتروني"
        className={styles.input}
      />
      <button className={styles.button}>إشترك</button>
    </div>
  );
}
