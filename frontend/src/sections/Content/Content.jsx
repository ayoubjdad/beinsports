import React, { useEffect, useState } from "react";
import SectionHeader from "../../layouts/SectionHeader/SectionHeader";
import MainNewsSection from "../MainNewsSection/MainNewsSection";
import Carousel from "../Carousel/Carousel";
import SideNewsletter from "../Newsletters/SideNewsletter";
import styles from "./Content.module.scss";
import Tags from "../Tags/Tags";
import SubVideos from "../../layouts/Videos/SubVideos";
import apis from "../../api/apis";
import { arabicTeamsNames } from "../../App";
import SmallStandings from "../Standings/SmallStandings/SmallStandings";
import Games from "../Games/Games";

export default function Content() {
  // * Categories ------------------------------------------------------------------
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.sofascore.com/api/v1/sport/football/categories`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // const filtredData = data?.events.filter(
        //   (element) => element.tournament.name === "Botola"
        // );
        const filtredData = data?.categories.filter((element) =>
          element.name.includes("Morocco")
        );
        console.log(":::::: ~ filtredData:", filtredData);
        setCategories(data);
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // * Seasons ------------------------------------------------------------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.sofascore.com/api/v1/config/unique-tournaments/ar/football`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
