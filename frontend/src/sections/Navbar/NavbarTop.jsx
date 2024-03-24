import React from "react";

const MenuItem = ({ icon, title }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
      }}
    >
      {icon}
      <div style={{ fontWeight: "700" }}>{title}</div>
    </div>
  );
};

export default function NavbarTop() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "4fr 3fr",
        padding: "10px 84px",
        alignItems: "center",
        color: "#5c2d91",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <img
            alt="logo"
            src="https://www.beinsports.com/_next/static/media/bein_logo.af017869.webp?ver=06-02-2024?w=128&q=75"
            srcset="https://www.beinsports.com/_next/static/media/bein_logo.af017869.webp?ver=06-02-2024?w=128&q=75"
            style={{ width: "144px", display: "flex", alignItems: "center" }}
          />
        </div>

        <MenuItem
          icon={
            <i
              class="fi fi-rr-apps"
              style={{
                display: "flex",
                fontSize: "20px",
              }}
            />
          }
          title={"نتائج مباشرة"}
        />
        <MenuItem
          icon={
            <i
              class="fi fi-rr-play-alt"
              style={{
                display: "flex",
                fontSize: "20px",
              }}
            />
          }
          title={"الفيديو"}
        />
        <MenuItem
          icon={
            <i
              class="fi fi-rr-signal-stream"
              style={{
                display: "flex",
                fontSize: "20px",
              }}
            />
          }
          title={"مباشر"}
        />
        <MenuItem
          icon={
            <i
              class="fi fi-rr-calendar-days"
              style={{
                display: "flex",
                fontSize: "20px",
              }}
            />
          }
          title={"جدول البث"}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <i
          class="fi fi-br-search"
          style={{ display: "flex", fontSize: "20px", padding: "6px" }}
        />
      </div>
    </div>
  );
}
