import React from "react";

const MenuItem = ({ title }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
    }}
  >
    {title}
  </div>
);

export default function NavbarMain() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr",
        padding: "10px 84px",
        height: "32px",
        alignItems: "center",
        backgroundColor: "#5c2d91",
        color: "white",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <MenuItem title={"كرة القدم"} />
        <MenuItem title={"الدوري الإنجليزي الممتاز"} />
        <MenuItem title={"الدوري الفرنسي"} />
        <MenuItem title={"تنس"} />
        <MenuItem title={"فورمولا 1"} />
        <MenuItem title={"المزيد"} />
        <MenuItem title={"دوري أبطال أوروبا"} />
        <MenuItem title={"ميركاتو"} />
        <MenuItem title={"القناة الأولمبية"} />
        <MenuItem title={"NBA"} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        أنشئ حسابك
      </div>
    </div>
  );
}
