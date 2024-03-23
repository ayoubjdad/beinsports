import React from "react";

export default function SideNewsletter() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "12px",
        backgroundColor: "white",
        padding: "16px",
        boxShadow: "rgba(145, 158, 171, 0.16) 0px 12px 24px -4px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "16px",
        }}
      >
        <img
          alt="img"
          src="https://www.beinsports.com/images/newsletter.png"
          style={{ height: "126px" }}
        />
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}
        >
          <div style={{ fontSize: "24px", fontWeight: 900 }}>
            انضم إلى قائمة نشرتنا الإخبارية
          </div>
          <div style={{ fontSize: "16px" }}>
            اشترك للحصول على محتوى حصري وتحديثات منتقاة
          </div>
        </div>
      </div>
      <input
        type="text"
        placeholder="أدخل بريدك الإلكتروني"
        style={{
          padding: "8px 16px",
          width: "-webkit-fill-available",
          border: "none",
          backgroundColor: "rgb(245, 245, 245)",
          borderRadius: "50px",
          fontFamily: "Bein-Bold",
          fontWeight: 900,
        }}
      />
      <button
        style={{
          padding: "8px 16px",
          width: "-webkit-fill-available",
          border: "none",
          backgroundColor: "rgb(92, 45, 145)",
          color: "white",
          borderRadius: "50px",
          fontFamily: "Bein-Bold",
          fontWeight: 900,
        }}
      >
        إشترك
      </button>
    </div>
  );
}
