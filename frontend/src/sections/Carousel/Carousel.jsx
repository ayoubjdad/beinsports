import React from "react";
import CarouselNews from "../../layouts/news/CarouselNews";
import styles from "./Carousel.module.scss";
import SectionHeader from "../../layouts/section_header/section_header";

export default function Carousel() {
  return (
    <>
      <SectionHeader title={"دوري أبطال أوروبا - كل الأخبار"} />
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
