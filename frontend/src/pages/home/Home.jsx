import React from "react";
import styles from "./Home.module.scss";
import TopGames from "../../sections/body/top-games/TopGames";
import MainNews from "../../sections/body/main-news/MainNews";
import Carousel from "../../sections/body/carousel/Carousel";
import Newsletter from "../../sections/side/newsletter/Newsletter";
import Tags from "../../sections/body/tags/Tags";
import Rankings from "../../sections/side/rankings/Rankings";
import SubVideo from "../../layouts/articles/SubVideo";
import SectionHeader from "../../layouts/SectionHeader/SectionHeader";
import HomeStats from "../../sections/body/stats/HomeStats";
import { featuredTeams, getTodayDate } from "../../App";
import { useQuery } from "react-query";
import AlertComponent from "../../components/alert/AlertComponent";
import { News } from "../../data/News";
import { Button, InputAdornment, TextField } from "@mui/material";
import Comps from "../Comps";

const fetchCategories = async () => {
  try {
    const response = await fetch(
      "https://api.sofascore.com/api/v1/config/unique-tournaments/en/football"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data?.events;
  } catch (error) {
    console.error("❌ Error fetching data:", error);
    return [];
  }
};

export default function Home() {
  const { data: categories } = useQuery("categories", fetchCategories, {
    refetchOnWindowFocus: false,
    retry: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
  });

  return (
    <div className={styles.container}>
      <Comps />

      <TopGames />
      {/*<div className={styles.contentContainer}>
        <div className={styles.content}>
          <Tags headerTitle={"مسابقات"} />
          <MainNews
            headerBackground="https://prod-media.beinsports.com/image/default_banner.png"
            headerTitle="أهم الأخبار اليومية"
            headerButtonText="المزيد"
            news={News}
          />
          <Carousel headerTitle={"أهم الأخبار اليومية"} />
        </div>

        <div className={styles.side}>
          <Rankings />
          <Newsletter />
          <div className={styles.videosContainer}>
            <SectionHeader title={"أحدث مقاطع الفيديو"} />
            <SubVideo
              categorie={"كأس الاتحاد الإنجليزي"}
              title={"مواجهة مليئة بالإثارة بين مانشستر يونايتد وليفربول"}
            />
            <hr className={styles.divider} />
            <SubVideo
              categorie={"كأس الاتحاد الإنجليزي"}
              title={"مواجهة مليئة بالإثارة بين مانشستر يونايتد وليفربول"}
            />
            <hr className={styles.divider} />
            <SubVideo
              categorie={"كأس الاتحاد الإنجليزي"}
              title={"مواجهة مليئة بالإثارة بين مانشستر يونايتد وليفربول"}
            />
          </div>
        </div>
      </div>
      <HomeStats /> */}
    </div>
  );
}
