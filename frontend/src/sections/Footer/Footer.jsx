import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#5c2d91",
        padding: "48px 64px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 3fr",
        color: "white",
        fontSize: "16px",
      }}
    >
      <div>
        <div>الدعم</div>
        <div>اتصل بنا</div>
        <div>beIN CONNECT</div>
        <div>beIN MEDIA GROUP</div>
        <div>الأسئلة الأكثر شيوعاً</div>
        <div>نبذة عن مجموعة beIN</div>
      </div>
      <div>
        <div></div>
        <div>اتصل بنا</div>
        <div>beIN CONNECT</div>
        <div>beIN MEDIA GROUP</div>
        <div>الأسئلة الأكثر شيوعاً</div>
        <div>نبذة عن مجموعة beIN</div>
      </div>
      <div>
        <div>تابعونا</div>
        <div>فيسبوك</div>
        <div>تويتر</div>
        <div>يوتيوب</div>
        <div>إنستاغرام</div>
        <div>تيك توك</div>
        <div>واتساب</div>
      </div>
      <div
        style={
          {
            //   display: "flex",
            //   justifyContent: "flex-end",
          }
        }
      >
        <div>
          <img
            style={{ width: "192px", objectFit: "contain" }}
            alt="beinsports"
            src="https://www.beinsports.com/_next/static/media/bein_logo_white.d3fa95e8.webp?ver=06-02-2024?w=64&q=75"
          />
          <div>قم بتنزيل تطبيقاتنا</div>
        </div>
      </div>
    </div>
  );
}
