import React, { useEffect, useState } from "react";
import SectionHeader from "../../layouts/SectionHeader/SectionHeader";
import MainNewsSection from "../MainNewsSection/MainNewsSection";
import Carousel from "../Carousel/Carousel";
import SideNewsletter from "../Newsletters/SideNewsletter";
import styles from "./Content.module.scss";
import Tags from "../Tags/Tags";
import SubNews from "../../layouts/news/SubNews";
import SubVideos from "../../layouts/Videos/SubVideos";

const Game = ({ event, key }) => {
  return (
    <div className={styles.gameContainer} key={key}>
      <div className={styles.gameInfos}>
        <span className={styles.gameCompetition}>البطولة الوطنية</span>
        {/* <span className={styles.gameDate}>ثلاثاء 9 أبريل</span> */}
      </div>

      <div className={styles.gameTeamSection}>
        <div className={styles.gameTeam}>
          <img
            alt={event?.homeTeam?.shortName}
            title={event?.homeTeam?.shortName}
            src={`https://api.sofascore.app/api/v1/team/${event?.homeTeam?.id}/image`}
          />
          <span>{event?.homeTeam?.name}</span>
        </div>
        <span className={styles.gameScore}>{event?.homeScore?.display}</span>
      </div>

      <div className={styles.gameTeamSection}>
        <div className={styles.gameTeam}>
          <img
            alt={event?.awayTeam?.shortName}
            title={event?.awayTeam?.shortName}
            src={`https:api.sofascore.app/api/v1/team/${event?.awayTeam?.id}/image`}
          />
          <span>{event?.awayTeam?.name}</span>
        </div>
        <span className={styles.gameScore}>{event?.awayScore?.display}</span>
      </div>
    </div>
  );
};

export default function Content() {
  const [scheduledEvents, setScheduledEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.sofascore.com/api/v1/sport/football/scheduled-events/2024-03-16`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const filtredData = data?.events.filter(
          (element) => element.tournament.name === "Botola"
        );
        setScheduledEvents(filtredData);
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
              "https://media.istockphoto.com/id/1367980393/fr/vectoriel/g%C3%A9om%C3%A9trique-futuriste-fond-de-gradation-violet-fonc%C3%A9-illustration-vectorielle.jpg?s=612x612&w=0&k=20&c=ZIEv8r7DibmSeE-35-h_FAitSt0HWlaOdtfTQld9T3I="
            }
            competitionLogo={
              "https://upload.wikimedia.org/wikipedia/commons/3/30/Botola1.png"
            }
            title={"البطولة الوطنية - الجولة 25"}
          />
          {scheduledEvents?.map((game, index) => {
            return <Game event={game} key={index} />;
          })}
        </div>
        <div className={styles.sectionContainer}>
          <SideNewsletter />
        </div>
        <div className={styles.sectionContainer}>
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
