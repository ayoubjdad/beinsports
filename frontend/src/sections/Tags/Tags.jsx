import React from "react";
import styles from "./Tags.module.scss";
import SectionHeader from "../../layouts/SectionHeader/SectionHeader";

export const Tag = ({ alias, logo, index }) => {
  return (
    <div key={index} className={styles.tag}>
      {logo && (
        <img src={logo} alt={alias} srcSet={logo} className={styles.logo} />
      )}
      <span>{alias}</span>
    </div>
  );
};

const staticTags = [
  "دوري أبطال أوروبا",
  "الدوري الإنجليزي الممتاز",
  "الدوري الإسباني - لا ليجا",
  "الدوري الفرنسي - ليج 1",
  "الدوري الألماني - بوندسليجا",
  //   "دوري أبطال آسيا",
  //   "الدوري الأوروبي",
  //   "الدوري الإيطالي - سيري آ",
  //   "تصفيات كأس أوروبا",
  //   "دوري أبطال أفريقيا",
  //   "كأس آسيا قطر 2023",
  //   "كأس أمم إفريقيا كوت ديفوار 2023 توتال إنيرجيز",
];

export default function Tags({
  tagsList = [],
  headerBackground,
  headerTitle,
  headerButtonText,
  style,
}) {
  const tags = [...tagsList] || staticTags || [];
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
        {tags.map((tag, index) => {
          return (
            <Tag
              alias={tag}
              logo={
                "https://prod-media.beinsports.com/image/34pl8szyvrbwcmfkuocjm3r6t.64.png?ver=06-02-2024"
              }
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}
