import React from "react";

export default function MainNewsLayout() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <img
        alt="مواجهة مليئة بالإثارة بين مانشستر يونايتد وليفربول"
        srcset="https://s1.dmcdn.net/v/VvyK-1bziEaOrXzuo/x240 256w, https://s1.dmcdn.net/v/VvyK-1bziEaOrXzuo/x240 384w, https://s1.dmcdn.net/v/VvyK-1bziEaHAwgWg/x360 640w, https://s2.dmcdn.net/v/VvyK-1bziEaHrA162/x720 1080w, https://s2.dmcdn.net/v/VvyK-1bziEal1eB5z/x1080 1920w, https://s1.dmcdn.net/v/VvyK-1bziEa5tfmOT 3840w"
        src="https://s1.dmcdn.net/v/VvyK-1bziEa5tfmOT"
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
        <div style={{ fontSize: "28px", fontWeight: 900 }}>
          مواجهة مليئة بالإثارة بين مانشستر يونايتد وليفربول
        </div>
        <p style={{ fontSize: "18px", margin: 0 }}>
          يحتضن ملعب أولد ترافورد مواجهة مليئة بالإثارة بين مانشستر يونايتد
          وليفربول في ربع نهائي كأس الاتحاد الإنجليزي اليوم الأحد.
        </p>
      </div>
    </div>
  );
}
