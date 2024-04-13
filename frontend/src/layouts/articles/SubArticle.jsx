import React from "react";

export default function SubArticle({ categorie, title, image }) {
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
        alt={title}
        src={image}
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
        <p style={{ fontSize: "18px", margin: 0 }}>{title}</p>
      </div>
    </div>
  );
}
