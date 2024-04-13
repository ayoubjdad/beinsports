import React from "react";

export default function MainArticle({ title, description, image }) {
  return (
    <div style={{ backgroundColor: "white" }}>
      <img
        alt={title}
        // srcset="https://s1.dmcdn.net/v/VvyK-1bziEaOrXzuo/x240 256w, https://s1.dmcdn.net/v/VvyK-1bziEaOrXzuo/x240 384w, https://s1.dmcdn.net/v/VvyK-1bziEaHAwgWg/x360 640w, https://s2.dmcdn.net/v/VvyK-1bziEaHrA162/x720 1080w, https://s2.dmcdn.net/v/VvyK-1bziEal1eB5z/x1080 1920w, https://s1.dmcdn.net/v/VvyK-1bziEa5tfmOT 3840w"
        src={image}
        decoding="async"
        data-nimg="fill"
        loading="lazy"
        style={{
          width: "100%",
          height: "344px",
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
        <div style={{ color: "#5c2d91", fontSize: "16px" }}>
          كأس الاتحاد الإنجليزي
        </div>
        <div style={{ fontSize: "28px", fontWeight: 900 }}>{title}</div>
        <p style={{ fontSize: "18px", margin: 0 }}>{description}</p>
      </div>
    </div>
  );
}
