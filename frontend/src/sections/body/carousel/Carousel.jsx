import React from "react";
import CarouselNews from "../../../layouts/news/CarouselNews";
import styles from "./Carousel.module.scss";
import SectionHeader from "../../../layouts/SectionHeader/SectionHeader";
import AliceCarousel from "react-alice-carousel";
import "./AliceCarousel.scss";
import { Box } from "@mui/material";

export default function Carousel({
  headerBackground,
  headerTitle,
  headerButtonText,
}) {
  const items = [
    <CarouselNews
      categorie={"كأس الاتحاد الإنجليز"}
      title={"أندرياس يونغ يتحدث عن القرعة ومواجهة أرسنال"}
    />,
    <CarouselNews
      categorie={"كأس الاتحاد الإنجليز"}
      title={"أندرياس يونغ يتحدث عن القرعة ومواجهة أرسنال"}
    />,
    <CarouselNews
      categorie={"كأس الاتحاد الإنجليز"}
      title={"أندرياس يونغ يتحدث عن القرعة ومواجهة أرسنال"}
    />,
    <CarouselNews
      categorie={"كأس الاتحاد الإنجليز"}
      title={"أندرياس يونغ يتحدث عن القرعة ومواجهة أرسنال"}
    />,
    <CarouselNews
      categorie={"كأس الاتحاد الإنجليز"}
      title={"أندرياس يونغ يتحدث عن القرعة ومواجهة أرسنال"}
    />,
    <CarouselNews
      categorie={"كأس الاتحاد الإنجليز"}
      title={"أندرياس يونغ يتحدث عن القرعة ومواجهة أرسنال"}
    />,
  ];

  const NextButton = () => {
    return (
      <div div>
        <Box component={"i"} className="fi fi-rr-angle-circle-right" />
      </div>
    );
  };
  const PrevButton = () => {
    return (
      <div div>
        <Box component={"i"} className="fi fi-rr-angle-circle-left" />
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {headerTitle && (
        <SectionHeader
          background={headerBackground}
          title={headerTitle}
          buttonText={headerButtonText}
        />
      )}
      <div className={styles.news}>
        <AliceCarousel
          // mouseTracking
          // disableDotsControls
          autoPlayDirection="rtl"
          renderNextButton={NextButton}
          renderPrevButton={PrevButton}
          autoWidth
          items={items}
          paddingLeft={20}
        />
      </div>
    </div>
  );
}
