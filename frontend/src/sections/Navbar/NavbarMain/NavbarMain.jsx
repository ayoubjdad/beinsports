import React from "react";
import styles from "./NavbarMain.module.scss";

const items = [
  "كرة القدم",
  "الدوري الإنجليزي الممتاز",
  "الدوري الفرنسي",
  "تنس",
  "فورمولا 1",
  "المزيد",
  "دوري أبطال أوروبا",
  "ميركاتو",
  "القناة الأولمبية",
  "NBA",
];

const MenuItem = ({ title }) => <div className={styles.menuItem}>{title}</div>;

export default function NavbarMain() {
  return (
    // <div className={styles.container}>
    //   <div className={styles.menuItems}>
    //     {items.map((item) => {
    //       return <MenuItem title={item} />;
    //     })}
    //   </div>
    //   <div className={styles.createAccountContainer}>
    //     <div className={styles.createAccount}>أنشئ حسابك</div>
    //   </div>
    // </div>
    <div className={styles.container} style={{ borderRadius: "16px" }}>
      Hello
    </div>
  );
}
