import React from "react";
import SectionHeader from "../../layouts/section_header/section_header";
import MainNewsSection from "../MainNewsSection/MainNewsSection";
import Carousel from "../Carousel/Carousel";
import SideNewsletter from "../Newsletters/SideNewsletter";

export default function Content() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "4fr 2fr",
        padding: "16px 120px",
        gap: "16px",
      }}
    >
      <div
        style={{
          boxShadow: "rgba(145, 158, 171, 0.16) 0px 12px 24px -4px",
        }}
      >
        <MainNewsSection />
        <Carousel />
        <MainNewsSection />
      </div>
      <div>
        <div
          style={{
            boxShadow: "rgba(145, 158, 171, 0.16) 0px 12px 24px -4px",
          }}
        >
          <SectionHeader
            background={
              "https://prod-media.beinsports.com/image/4oogyu6o156iphvdvphwpck10_banner.png"
            }
            competitionLogo={
              "https://prod-media.beinsports.com/image/4oogyu6o156iphvdvphwpck10_light.64.png?ver=06-02-2024"
            }
            title={"دوري أبطال أوروبا"}
          />
          <SideNewsletter />
        </div>
        <div>
          <SectionHeader
            background={
              "https://prod-media.beinsports.com/image/4oogyu6o156iphvdvphwpck10_banner.png"
            }
            competitionLogo={
              "https://prod-media.beinsports.com/image/4oogyu6o156iphvdvphwpck10_light.64.png?ver=06-02-2024"
            }
            title={"الدوري الإنجليزي الممتاز"}
          />
        </div>
        الترتيب
      </div>
    </div>
  );
}
