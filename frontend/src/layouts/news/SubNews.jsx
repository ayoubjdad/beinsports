import React from "react";

export default function SubNews({ categorie, title }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        borderRadius: "6px",
        boxShadow: "rgba(145, 158, 171, 0.16) 0px 12px 24px -4px",
        maxHeight: "112px",
        overflow: "hidden",
      }}
    >
      <img
        alt="مواجهة مليئة بالإثارة بين مانشستر يونايتد وليفربول"
        srcset="https://s1.dmcdn.net/v/VvyK-1bziEaOrXzuo/x240 256w, https://s1.dmcdn.net/v/VvyK-1bziEaOrXzuo/x240 384w, https://s1.dmcdn.net/v/VvyK-1bziEaHAwgWg/x360 640w, https://s2.dmcdn.net/v/VvyK-1bziEaHrA162/x720 1080w, https://s2.dmcdn.net/v/VvyK-1bziEal1eB5z/x1080 1920w, https://s1.dmcdn.net/v/VvyK-1bziEa5tfmOT 3840w"
        src="https://s1.dmcdn.net/v/VvyK-1bziEa5tfmOT"
        decoding="async"
        data-nimg="fill"
        loading="lazy"
        style={{
          width: "160px",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "8px",
          padding: "1.5rem",
        }}
      >
        <div style={{ color: "#5c2d91", fontSize: "16px" }}>{categorie}</div>
        <p style={{ fontSize: "18px", margin: 0 }}>{title} </p>
      </div>
    </div>
  );
}
