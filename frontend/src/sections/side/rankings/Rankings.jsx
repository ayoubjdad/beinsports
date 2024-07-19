import React from "react";
import styles from "./Rankings.module.scss";
import { arabicTeamsNames } from "../../../data/ArabicNames";
import SectionHeader from "../../../layouts/SectionHeader/SectionHeader";
import { useQuery } from "react-query";

const fetchRankings = async () => {
  try {
    const response = await fetch(
      "https://api.sofascore.com/api/v1/unique-tournament/937/season/54108/standings/total"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const result = data?.standings[0]?.rows.slice(0, 5);
    return result;
  } catch (error) {
    console.error("❌ Error fetching data:", error);
    return [];
  }
};

export default function Rankings() {
  const { data: standings, isLoading } = useQuery("rankings", fetchRankings, {
    refetchOnWindowFocus: false,
    retry: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
  });

  return (
    <div className={styles.container}>
      <SectionHeader
        background="https://prod-media.beinsports.com/image/2kwbbcootiqqgmrzs6o5inle5_banner.png"
        competitionLogo="https://upload.wikimedia.org/wikipedia/commons/3/30/Botola1.png"
        title="جدول الترتيب"
        buttonText="الترتيب"
      />

      <div className={styles.rankingContainer}>
        <div className={styles.header}>
          <div>الرتبة</div>
          <div className={styles.team}>النادي</div>
          <div>لعب</div>
          <div>فرق</div>
          <div>نقاط</div>
        </div>

        <div className={styles.body}>
          {isLoading ? (
            <>Loading...</>
          ) : (
            standings?.length &&
            standings?.map((element) => {
              const arabicName = arabicTeamsNames.find(
                ({ id }) => id === element?.team?.id
              );
              return (
                <div className={styles.row}>
                  <div className={styles.position}>{element?.position}</div>
                  <div className={styles.team}>
                    <img
                      alt={arabicName.name}
                      title={arabicName.name}
                      src={`https://api.sofascore.app/api/v1/team/${element?.team?.id}/image`}
                    />
                    {arabicName.name}
                  </div>
                  <div className={styles.matches}>{element?.matches}</div>
                  <div className={styles.score}>
                    {element?.scoresFor - element?.scoresAgainst}
                  </div>
                  <div className={styles.points}>{element?.points}</div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
