import React from "react";
import { useQuery } from "react-query";
import styles from "./HomeStats.module.scss";
import SectionHeader from "../../../layouts/SectionHeader/SectionHeader";

const options = {
  refetchOnWindowFocus: false,
  retry: false,
  refetchOnmount: false,
  refetchOnReconnect: false,
};

const fetchStats = async (limit, order) => {
  try {
    // * order = ["goals, assists, rating..."]
    const response = await fetch(
      `https://api.sofascore.com/api/v1/unique-tournament/937/season/54108/statistics?limit=${limit}&order=-${order}&accumulation=total&group=summary`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data?.results;
  } catch (error) {
    console.error("❌ Error fetching data:", error);
    return [];
  }
};

const PlayerStat = ({ stat, playerName, playerId, teamName, teamId }) => {
  return (
    <div className={styles.playerStatContainer}>
      <span className={styles.playerContainer}>
        <img
          alt=""
          className={styles.playerImage}
          src={`https://api.sofascore.app/api/v1/player/${playerId}/image`}
        />
        <span>
          <div className={styles.playerName}>{playerName}</div>
          <div className={styles.playerTeam}>{teamName}</div>
        </span>
      </span>
      <span className={styles.playerStat}>{stat}</span>
    </div>
  );
};
export default function HomeStats() {
  const { data: goalsStats } = useQuery(
    "goals",
    () => fetchStats(3, "goals"),
    options
  );

  const { data: assistsStats } = useQuery(
    "assists",
    () => fetchStats(3, "assists"),
    options
  );

  const { data: ratingStats } = useQuery(
    "rating",
    () => fetchStats(3, "rating"),
    options
  );

  return (
    <div className={styles.container}>
      <SectionHeader title="إحصائيات الدوري الإنجليزي" />

      <div className={styles.statsContainer}>
        <div className={styles.stats}>
          <div className={styles.title}>ترتيب الهدافين</div>
          {goalsStats?.length &&
            goalsStats.map(({ goals, player, team }) => {
              return (
                <PlayerStat
                  stat={goals}
                  playerName={player?.name}
                  playerId={player?.id}
                  teamName={team?.name}
                  teamId={team?.id}
                />
              );
            })}
        </div>
        <div className={styles.stats}>
          <div className={styles.title}>التمريرات الحاسمة</div>
          {assistsStats?.length &&
            assistsStats.map(({ assists, player, team }) => {
              return (
                <PlayerStat
                  stat={assists}
                  playerName={player?.name}
                  playerId={player?.id}
                  teamName={team?.name}
                  teamId={team?.id}
                />
              );
            })}
        </div>
        <div className={styles.stats}>
          <div className={styles.title}>الأعلى تقييما</div>
          {ratingStats?.length &&
            ratingStats.map(({ rating, player, team }) => {
              return (
                <PlayerStat
                  stat={rating}
                  playerName={player?.name}
                  playerId={player?.id}
                  teamName={team?.name}
                  teamId={team?.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
