import React from "react";
import styles from "./NavbarTop.module.scss";

const MenuItem = ({ icon, title }) => {
  return (
    <div className={styles.menuItem}>
      {icon}
      <div className={styles.menuItemTitle}>{title}</div>
    </div>
  );
};

export default function NavbarTop() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>
          <img
            alt="logo"
            src="https://www.beinsports.com/_next/static/media/bein_logo.af017869.webp?ver=06-02-2024?w=128&q=75"
            srcSet="https://www.beinsports.com/_next/static/media/bein_logo.af017869.webp?ver=06-02-2024?w=128&q=75"
            className={styles.logo}
          />
        </div>

        <MenuItem
          icon={<i className="fi fi-rr-apps" />}
          title={"نتائج مباشرة"}
        />
        <MenuItem
          icon={<i className="fi fi-rr-play-alt" />}
          title={"الفيديو"}
        />
        <MenuItem
          icon={<i className="fi fi-rr-signal-stream" />}
          title={"مباشر"}
        />
        <MenuItem
          icon={<i className="fi fi-rr-calendar-days" />}
          title={"جدول البث"}
        />
      </div>
      <div className={styles.searchIcon}>
        <i className="fi fi-br-search" />
      </div>
    </div>
  );
}
