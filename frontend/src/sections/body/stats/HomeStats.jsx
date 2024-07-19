import React from "react";
import { useQuery } from "react-query";
import styles from "./HomeStats.module.scss";
import SectionHeader from "../../../layouts/SectionHeader/SectionHeader";
import LeadersStats from "../../../layouts/stats/leaders-stats/LeadersStats";

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

export default function HomeStats() {
  const { data: goalsStats } = useQuery(
    "goals",
    () => fetchStats(5, "goals"),
    options
  );

  const { data: assistsStats } = useQuery(
    "assists",
    () => fetchStats(5, "assists"),
    options
  );

  const { data: ratingStats } = useQuery(
    "rating",
    () => fetchStats(5, "rating"),
    options
  );

  return (
    <div className={styles.container}>
      <SectionHeader title="إحصائيات الدوري الإنجليزي" />

      <div className={styles.statsContainer}>
        <LeadersStats title="ترتيب الهدافين" data={goalsStats} stat="goals" />
        <LeadersStats
          title="التمريرات الحاسمة"
          data={assistsStats}
          stat="assists"
        />
        <LeadersStats title="الأعلى تقييما" data={ratingStats} stat="rating" />
      </div>
    </div>
  );
}
