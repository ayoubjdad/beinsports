import React, { useEffect, useState } from "react";
import styles from "./Games.module.scss";
import Game from "./Game/Game";
import SectionHeader from "../../layouts/SectionHeader/SectionHeader";

export default function Games() {
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

  return (
    <div style={{ backgroundColor: "white" }}>
      <SectionHeader
        background={
          "https://prod-media.beinsports.com/image/default_banner.png"
        }
        competitionLogo={
          "https://upload.wikimedia.org/wikipedia/commons/3/30/Botola1.png"
        }
        title={"البطولة الوطنية - الجولة 25"}
      />

      {scheduledEvents?.map((game, index) => {
        return <Game event={game} key={index} />;
      })}
    </div>
  );
}
