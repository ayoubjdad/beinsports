import React from "react";

export default function Button({ icon, title, style }) {
  return (
    <div
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        padding: "8px 16px",
        border: "1px solid white",
        borderRadius: "0.25rem",
        fontSize: "14px",
      }}
    >
      {title}
      {icon}
    </div>
  );
}
