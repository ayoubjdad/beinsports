import React from "react";
import { arabicTeamsNames } from "../../../data/ArabicNames";
import styles from "./Game.module.scss";

export default function Game({ event, key }) {
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
}
