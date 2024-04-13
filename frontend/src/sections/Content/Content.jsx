import React, { useEffect, useState } from "react";
import SectionHeader from "../../layouts/SectionHeader/SectionHeader";
import MainNewsSection from "../MainNewsSection/MainNewsSection";
import Carousel from "../body/carousel/Carousel";
import SideNewsletter from "../side/newsletter/Newsletter";
import styles from "./Content.module.scss";
import Tags from "../Tags/Tags";
import SubVideos from "../../layouts/Videos/SubVideos";
import SmallStandings from "../Standings/SmallStandings/SmallStandings";
import Games from "../Games/Games";

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
        <Carousel headerTitle={"أهم الأخبار اليومية"} />
        <MainNewsSection
          headerBackground={
            "https://prod-media.beinsports.com/image/default_banner.png"
          }
          headerTitle={"أهم الأخبار اليومية"}
          headerButtonText={"المزيد"}
        />
      </div>
      <div className={styles.sectionContainer}>
        <Games />
        <SmallStandings />
        <SideNewsletter />
        <div style={{ backgroundColor: "white" }}>
          <SectionHeader title={"أحدث مقاطع الفيديو"} />
          <SubVideos
            categorie={"كأس الاتحاد الإنجليزي"}
            title={"مواجهة مليئة بالإثارة بين مانشستر يونايتد وليفربول"}
          />
          <SubVideos
            categorie={"كأس الاتحاد الإنجليزي"}
            title={"مواجهة مليئة بالإثارة بين مانشستر يونايتد وليفربول"}
          />
          <SubVideos
            categorie={"كأس الاتحاد الإنجليزي"}
            title={"مواجهة مليئة بالإثارة بين مانشستر يونايتد وليفربول"}
          />
          <SubVideos
            categorie={"كأس الاتحاد الإنجليزي"}
            title={"مواجهة مليئة بالإثارة بين مانشستر يونايتد وليفربول"}
          />
        </div>
      </div>
    </div>
  );
}
