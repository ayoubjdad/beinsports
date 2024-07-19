import React from "react";
import styles from "./LeadersStats.module.scss";

export default function LeadersStats({ title, data, stat }) {
  return (
    <div className={styles.leadersStatsContainer}>
      <div className={styles.title}>{title}</div>

      {data?.length &&
        data.map(({ goals, player, team }, index) => {
          return (
            <div
              className={`${styles.leaderItem} ${
                index === 0 ? styles.firstItem : ""
              } ${index % 2 === 1 ? styles.oddRow : ""}`}
              key={index}
            >
              <div className={styles.rank}>{index + 1}</div>
              <img
                alt={player.name}
                title={player.name}
                className={styles.playerImage}
                src={`https://api.sofascore.app/api/v1/player/${player.id}/image`}
              />

              <div className={styles.playerInfo}>
                <div className={styles.playerName}>{player?.name}</div>
                <div className={styles.teamName}>{team?.name}</div>
              </div>
              <div className={styles.goals}>{goals}</div>
            </div>
          );
        })}
    </div>
  );
}
