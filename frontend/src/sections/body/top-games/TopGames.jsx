import React from "react";
import { useQuery } from "react-query";
import styles from "./TopGames.module.scss";
import SectionHeader from "../../../layouts/SectionHeader/SectionHeader";
import { red } from "../../../theme/palette";
import { getTodayDate } from "../../../App";
import { featuredTeams, topTournamentIds } from "../../../data/FeaturedTeams";
import MinifiedGame from "../../../layouts/games/minified-game/MinifiedGame";

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

    const filteredData = data?.events.filter(({ tournament }) =>
      topTournamentIds.includes(tournament.uniqueTournament.id)
    );

    // const list = [];
    // for (const id of topTournamentIds) {
    //   if (id === 937) {
    //     const liiiiiii = filteredData.filter(
    //       ({ tournament }) => tournament.uniqueTournament.id === id
    //     );
    //     list.push(...liiiiiii);
    //   } else {
    //     const liiiiiii = filteredData.filter(
    //       ({ tournament, awayTeam, homeTeam }) =>
    //         tournament.uniqueTournament.id === id &&
    //         featuredTeams.includes(homeTeam.name || awayTeam.name)
    //     );
    //     list.push(...liiiiiii);
    //   }
    // }

    // return list;

    return filteredData.slice(0, 8);
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

  if (status.type === "postponed") {
    return "أجلت";
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
          data.map(({ homeTeam, homeScore, awayTeam, awayScore, status }) => {
            return (
              <MinifiedGame
                homeTeam={homeTeam}
                homeScore={homeScore}
                awayTeam={awayTeam}
                awayScore={awayScore}
                status={status}
              />
            );
          })}
      </div>
    </div>
  );
};

export default TopGames;
