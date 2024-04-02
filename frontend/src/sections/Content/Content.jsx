import React, { useEffect, useState } from "react";
import SectionHeader from "../../layouts/SectionHeader/SectionHeader";
import MainNewsSection from "../MainNewsSection/MainNewsSection";
import Carousel from "../Carousel/Carousel";
import SideNewsletter from "../Newsletters/SideNewsletter";
import styles from "./Content.module.scss";
import Tags from "../Tags/Tags";
import SubVideos from "../../layouts/Videos/SubVideos";
import apis from "../../api/apis";

const arabicTeamsNames = [
  { id: 24394, name: "الجيش الملكي" },
  { id: 41757, name: "الرجاء الرياضي" },
  { id: 80395, name: "نهضة بركان" },
  { id: 55027, name: "اتحاد الفتح الرياضي" },
  { id: 36268, name: "الوداد الرياضي" },
  { id: 55037, name: "أولمبيك آسفي" },
  { id: 118834, name: "إتحاد تواركة" },
  { id: 55049, name: "المغرب التطواني" },
  { id: 263373, name: "نهضة الزمامرة" },
  { id: 55035, name: "المغرب الفاسي" },
  { id: 55039, name: "حسنية أكادير" },
  { id: 87180, name: "اتحاد طنجة" },
  { id: 327830, name: "شباب المحمدية" },
  { id: 297607, name: "الشباب الرياضي السوالم" },
  { id: 170588, name: "مولودية وجدة" },
  { id: 118830, name: "يوسفية برشيد" },
];

const Game = ({ event, key }) => {
  const homeTeamArabicName = arabicTeamsNames.find(
    ({ id }) => id === event?.homeTeam?.id
  );
  const awayTeamArabicName = arabicTeamsNames.find(
    ({ id }) => id === event?.awayTeam?.id
  );

  return (
    <div className={styles.gameContainer} key={key}>
      <div className={styles.gameInfos}>
        <span className={styles.gameCompetition}>البطولة الوطنية</span>
        {/* <span className={styles.gameDate}>ثلاثاء 9 أبريل</span> */}
      </div>

      <div className={styles.gameTeamSection}>
        <div className={styles.gameTeam}>
          <img
            alt={homeTeamArabicName.name}
            title={homeTeamArabicName.name}
            src={`https://api.sofascore.app/api/v1/team/${event?.homeTeam?.id}/image`}
          />
          <span>{homeTeamArabicName.name}</span>
        </div>
        <span className={styles.gameScore}>{event?.homeScore?.display}</span>
      </div>

      <div className={styles.gameTeamSection}>
        <div className={styles.gameTeam}>
          <img
            alt={awayTeamArabicName.name}
            title={awayTeamArabicName.name}
            src={`https:api.sofascore.app/api/v1/team/${event?.awayTeam?.id}/image`}
          />
          <span>{awayTeamArabicName.name}</span>
        </div>
        <span className={styles.gameScore}>{event?.awayScore?.display}</span>
      </div>
    </div>
  );
};

export default function Content() {
  // * Scheduled events ------------------------------------------------------------------
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
          `https://api.sofascore.com/api/v1/config/unique-tournaments/en/football`
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

  // * Standings ------------------------------------------------------------------
  const [standings, setStandings] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          // `https://api.sofascore.com/api/v1/unique-tournament/17/season/{seasonId}/standings/total`
          "https://api.sofascore.com/api/v1/unique-tournament/937/season/54108/standings/total"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setStandings(data?.standings[0]?.rows.slice(0, 5));
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
        <SectionHeader
          background={
            "https://media.istockphoto.com/id/1367980393/fr/vectoriel/g%C3%A9om%C3%A9trique-futuriste-fond-de-gradation-violet-fonc%C3%A9-illustration-vectorielle.jpg?s=612x612&w=0&k=20&c=ZIEv8r7DibmSeE-35-h_FAitSt0HWlaOdtfTQld9T3I="
          }
          competitionLogo={
            "https://upload.wikimedia.org/wikipedia/commons/3/30/Botola1.png"
          }
          title={"البطولة الوطنية - الجولة 25"}
        />

        <div style={{ backgroundColor: "white" }}>
          {scheduledEvents?.map((game, index) => {
            return <Game event={game} key={index} />;
          })}
        </div>

        <SectionHeader
          background={
            "https://media.istockphoto.com/id/1367980393/fr/vectoriel/g%C3%A9om%C3%A9trique-futuriste-fond-de-gradation-violet-fonc%C3%A9-illustration-vectorielle.jpg?s=612x612&w=0&k=20&c=ZIEv8r7DibmSeE-35-h_FAitSt0HWlaOdtfTQld9T3I="
          }
          competitionLogo={
            "https://upload.wikimedia.org/wikipedia/commons/3/30/Botola1.png"
          }
          title={"جدول الترتيب"}
          buttonText={"الترتيب"}
        />
        <div
          style={{
            backgroundColor: "white",
            padding: "10px",
            display: "grid",
            gap: "inherit",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 3fr 1fr 1fr 1fr",
              textAlign: "center",
            }}
          >
            <div>الرتبة</div>
            <div style={{ textAlign: "right" }}>النادي</div>
            <div>لعب</div>
            <div>فرق</div>
            <div>نقاط</div>
          </div>

          {standings?.map((element) => {
            const arabicName = arabicTeamsNames.find(
              ({ id }) => id === element?.team?.id
            );
            return (
              <div
                style={{
                  display: "grid",
                  textAlign: "center",
                  gridTemplateColumns: "1fr 3fr 1fr 1fr 1fr",
                }}
              >
                <div style={{ color: "#5c2d91" }}>{element?.position}</div>
                <div
                  style={{
                    fontWeight: 900,
                    textAlign: "right",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <img
                    alt={arabicName.name}
                    title={arabicName.name}
                    src={`https://api.sofascore.app/api/v1/team/${element?.team?.id}/image`}
                    style={{ width: "20px" }}
                  />
                  {arabicName.name}
                </div>
                <div style={{ fontWeight: 300 }}>{element?.matches}</div>
                <div style={{ fontWeight: 300 }}>
                  {element?.scoresFor - element?.scoresAgainst}
                </div>
                <div style={{ fontWeight: 700 }}>{element?.points}</div>
              </div>
            );
          })}
        </div>

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
