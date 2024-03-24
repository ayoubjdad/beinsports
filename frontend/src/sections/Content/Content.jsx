import React from "react";
import SectionHeader from "../../layouts/SectionHeader/SectionHeader";
import MainNewsSection from "../MainNewsSection/MainNewsSection";
import Carousel from "../Carousel/Carousel";
import SideNewsletter from "../Newsletters/SideNewsletter";
import styles from "./Content.module.scss";
import Tags from "../Tags/Tags";

export default function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.newsContainer}>
        <Tags headerTitle={"مسابقات"} />
        <MainNewsSection
          headerBackground={
            "https://prod-media.beinsports.com/image/default_banner.png"
          }
          headerTitle={"أهم الأخبار اليومية"}
          headerButtonText={"المزيد"}
        />
        <Carousel headerTitle={"أهم الأخبار اليومية"} />
        <MainNewsSection
          headerBackground={
            "https://prod-media.beinsports.com/image/default_banner.png"
          }
          headerTitle={"أهم الأخبار اليومية"}
          headerButtonText={"المزيد"}
        />
      </div>
      <div>
        <div className={styles.sectionContainer}>
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
        <div className={styles.sectionContainer}>
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
