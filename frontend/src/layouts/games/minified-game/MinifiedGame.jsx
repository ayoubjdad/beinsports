import React from "react";
import styles from "./MinifiedGame.module.scss";

const Score = ({ homeScore, awayScore, status }) => {
  if (status.type === "inprogress") {
    return (
      <span style={{ color: "red" }}>
        {homeScore.current} - {awayScore.current}
      </span>
    );
  }

  if (status.type === "notstarted") {
    return "لم تبدأ";
  }

  if (status.type === "postponed") {
    return "أجلت";
  }

  return homeScore.display + " - " + awayScore.display;
};

export default function MinifiedGame({
  homeTeam,
  homeScore,
  awayTeam,
  awayScore,
  status,
}) {
  return (
    <div className={styles.container}>
      <img
        style={{ width: "20px" }}
        alt={homeTeam.shortName}
        title={homeTeam.shortName}
        className={styles.teamLogo}
        src={`https://api.sofascore.app/api/v1/team/${homeTeam?.id}/image`}
      />
      <div className={styles.score}>
        <Score homeScore={homeScore} awayScore={awayScore} status={status} />
      </div>
      <img
        style={{ width: "20px" }}
        alt={awayTeam.shortName}
        title={awayTeam.shortName}
        className={styles.teamLogo}
        src={`https://api.sofascore.app/api/v1/team/${awayTeam?.id}/image`}
      />
    </div>
  );
}
