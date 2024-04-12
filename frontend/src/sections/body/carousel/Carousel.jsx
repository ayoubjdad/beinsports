import React from "react";
import Slider from "react-slick";
import CarouselNews from "../../../layouts/news/CarouselNews";
import styles from "./Carousel.module.scss";
import SectionHeader from "../../../layouts/SectionHeader/SectionHeader";
import { Box } from "@mui/material";

export default function Carousel({
  headerBackground,
  headerTitle,
  headerButtonText,
}) {
  function NextArrow() {
    return <Box component={"i"} className="fi fi-rr-angle-circle-right" />;
  }

  function PrevArrow() {
    return <Box component={"i"} className="fi fi-rr-angle-circle-left" />;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    rtl: true,
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
        <Slider {...settings}>
          <CarouselNews
            categorie={"1"}
            title={"أندرياس يونغ يتحدث عن القرعة ومواجهة أرسنال"}
          />
          <CarouselNews
            categorie={"2"}
            title={"أندرياس يونغ يتحدث عن القرعة ومواجهة أرسنال"}
          />
          <CarouselNews
            categorie={"3"}
            title={"أندرياس يونغ يتحدث عن القرعة ومواجهة أرسنال"}
          />
          <CarouselNews
            categorie={"4"}
            title={"أندرياس يونغ يتحدث عن القرعة ومواجهة أرسنال"}
          />
          <CarouselNews
            categorie={"5"}
            title={"أندرياس يونغ يتحدث عن القرعة ومواجهة أرسنال"}
          />
          <CarouselNews
            categorie={"6"}
            title={"أندرياس يونغ يتحدث عن القرعة ومواجهة أرسنال"}
          />
        </Slider>
      </div>
    </div>
  );
}
