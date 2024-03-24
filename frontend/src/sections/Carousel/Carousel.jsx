import React from "react";
import CarouselNews from "../../layouts/news/CarouselNews";
import styles from "./Carousel.module.scss";
import SectionHeader from "../../layouts/SectionHeader/SectionHeader";

export default function Carousel({
  headerBackground,
  headerTitle,
  headerButtonText,
}) {
  return (
    <>
      {headerTitle && (
        <SectionHeader
          background={headerBackground}
          title={headerTitle}
          buttonText={headerButtonText}
        />
      )}
      <div className={styles.container}>
        <CarouselNews
          categorie={"كأس الاتحاد الإنجليز"}
          title={"أندرياس يونغ يتحدث عن القرعة ومواجهة أرسنال"}
        />
        <CarouselNews
          categorie={"كأس الاتحاد الإنجليز"}
          title={"أندرياس يونغ يتحدث عن القرعة ومواجهة أرسنال"}
        />
        <CarouselNews
          categorie={"كأس الاتحاد الإنجليز"}
          title={"أندرياس يونغ يتحدث عن القرعة ومواجهة أرسنال"}
        />
      </div>
    </>
  );
}
