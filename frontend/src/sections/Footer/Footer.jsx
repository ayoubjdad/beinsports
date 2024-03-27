import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <p className={styles.groupTitle}>الدعم</p>
        <li>
          <ul>اتصل بنا</ul>
          <ul>beIN CONNECT</ul>
          <ul>beIN MEDIA GROUP</ul>
          <ul>الأسئلة الأكثر شيوعاً</ul>
          <ul>نبذة عن مجموعة beIN</ul>
        </li>
      </div>
      <div className={styles.group}>
        <p className={styles.groupTitle}>تابعونا</p>
        <li>
          <ul>فيسبوك</ul>
          <ul>تويتر</ul>
          <ul>يوتيوب</ul>
          <ul>إنستاغرام</ul>
          <ul>تيك توك</ul>
          <ul>واتساب</ul>
        </li>
      </div>
      <div className={styles.logo}>
        <img
          style={{ width: "192px" }}
          alt="beinsports"
          src="https://www.beinsports.com/_next/static/media/bein_logo_white.d3fa95e8.webp?ver=06-02-2024?w=64&q=75"
        />
        <div className={styles.apps}>
          <div>قم بتنزيل تطبيقاتنا</div>
          <div className={styles.appsIcons}>
            <img
              alt="beinsports"
              src="https://assets-us-01.kc-usercontent.com/31dbcbc6-da4c-0033-328a-d7621d0fa726/adf97fbe-0e56-4fff-81a8-1801a0304edb/google-badge.03e68d6%402x.png?ver=06-02-2024?w=128&q=75"
            />
            <img
              alt="beinsports"
              src="https://assets-us-01.kc-usercontent.com/31dbcbc6-da4c-0033-328a-d7621d0fa726/adf97fbe-0e56-4fff-81a8-1801a0304edb/google-badge.03e68d6%402x.png?ver=06-02-2024?w=128&q=75"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
