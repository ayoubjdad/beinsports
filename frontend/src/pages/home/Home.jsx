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

export default function Home() {
  return (
    <div className={styles.container}>
      <TopGames />
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <Tags headerTitle={"مسابقات"} />
          <MainNews
            headerBackground="https://prod-media.beinsports.com/image/default_banner.png"
            headerTitle="أهم الأخبار اليومية"
            headerButtonText="المزيد"
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
      <HomeStats />
    </div>
  );
}
