import React from "react";
import styles from "./Tags.module.scss";
import SectionHeader from "../../../layouts/SectionHeader/SectionHeader";
import Chip from "../../../components/chip/Chip";

const staticTags = [
  {
    alias: "دوري أبطال أوروبا",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/bf/UEFA_Champions_League_logo_2.svg/1067px-UEFA_Champions_League_logo_2.svg.png",
  },
  {
    alias: "الدوري الإنجليزي",
    logo: "https://banner2.cleanpng.com/20180711/vg/kisspng-201617-premier-league-english-football-league-l-lion-emoji-5b460f06eeac18.5589169115313180229776.jpg",
  },
  {
    alias: "الدوري الإسباني",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/LaLiga_logo_2023.svg/1200px-LaLiga_logo_2023.svg.png",
  },
  {
    alias: "الدوري الفرنسي",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Ligue1_logo.png",
  },
  {
    alias: "الدوري الألماني",
    logo: "https://upload.wikimedia.org/wikipedia/fr/b/b4/Logo_Bundesliga.png",
  },
];

export default function Tags({
  tagsList = [],
  headerBackground,
  headerTitle,
  headerButtonText,
  style,
}) {
  const tags = (tagsList?.length && tagsList) || staticTags || [];
  return (
    <div style={{ ...style }} className={styles.container}>
      {headerTitle && (
        <SectionHeader
          background={headerBackground}
          title={headerTitle}
          buttonText={headerButtonText}
        />
      )}
      <div className={styles.tags}>
        {tags.map(({ alias, logo }, index) => (
          <Chip title={alias} startIcon={logo} key={index} />
        ))}
      </div>
    </div>
  );
}
