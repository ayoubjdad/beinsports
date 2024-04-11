import React, { useEffect, useState } from "react";
import styles from "./GlobalStandings.module.scss";
import { arabicTeamsNames } from "../../../App";
import SideNewsletter from "../../side/newsletter/Newsletter";

export default function GlobalStandings() {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.sofascore.com/api/v1/unique-tournament/937/season/54108/standings/total"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setStandings(data?.standings[0]?.rows);
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.standingsContainer}>
        <div className={styles.header}>
          <div>الرتبة</div>
          <div className={styles.team}>النادي</div>
          <div>لعب</div>
          <div>فاز</div>
          <div>تعادل</div>
          <div>خسر</div>
          <div>فرق</div>
          <div>نقاط</div>
        </div>

        {standings?.map((element) => {
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
              <div className={styles.matches}>{element?.wins}</div>
              <div className={styles.matches}>{element?.draws}</div>
              <div className={styles.matches}>{element?.losses}</div>
              <div className={styles.score}>
                {element?.scoresFor - element?.scoresAgainst}
              </div>
              <div className={styles.points}>{element?.points}</div>
            </div>
          );
        })}
      </div>
      <div>
        <SideNewsletter />
      </div>
    </div>
  );
}
