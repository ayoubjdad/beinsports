import React from "react";
import { useQuery } from "react-query";
import styles from "./TopGames.module.scss";
import SectionHeader from "../../../layouts/SectionHeader/SectionHeader";
import { red } from "../../../theme/palette";
import { getTodayDate } from "../../../App";

// * moroccan team => moroccan player =>
const fetchScheduledEvents = async () => {
  try {
    const today = getTodayDate();

    const response = await fetch(
      `https://api.sofascore.com/api/v1/sport/football/scheduled-events/${today}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data?.events?.slice(0, 10);
  } catch (error) {
    console.error("❌ Error fetching data:", error);
    return [];
  }
};

const Score = ({ homeScore, awayScore, status }) => {
  if (status.type === "inprogress") {
    return (
      <span style={{ color: red.darker }}>
        {homeScore.current} - {awayScore.current}
      </span>
    );
  }

  if (status.type === "notstarted") {
    return "لم تبدأ";
  }

  return homeScore.display + " - " + awayScore.display;
};

const TopGames = () => {
  const { data } = useQuery("scheduledEvents", fetchScheduledEvents, {
    refetchOnWindowFocus: false,
    retry: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
  });

  return (
    <div className={styles.container}>
      <SectionHeader title="أبرز مباريات اليوم" />
      <div className={styles.gamesContainer}>
        {data?.length &&
          data.map(({ homeTeam, homeScore, awayTeam, awayScore, status }) => (
            <div
              className={styles.game}
              style={{
                backgroundColor: status.type === "inprogress" && red?.lighter,
              }}
              key={status.uniqueTournamentId}
            >
              <div className={styles.gameTeam}>
                <img
                  alt={homeTeam.shortName}
                  title={homeTeam.shortName}
                  className={styles.teamLogo}
                  src={`https://api.sofascore.app/api/v1/team/${homeTeam?.id}/image`}
                />
              </div>

              <div className={styles.gameTeam}>
                <Score
                  homeScore={homeScore}
                  awayScore={awayScore}
                  status={status}
                />
              </div>

              <div className={styles.gameTeam}>
                <img
                  alt={awayTeam.shortName}
                  title={awayTeam.shortName}
                  className={styles.teamLogo}
                  src={`https://api.sofascore.app/api/v1/team/${awayTeam?.id}/image`}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopGames;
