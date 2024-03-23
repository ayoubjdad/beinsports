import React from "react";
import MainNews from "../../layouts/news/MainNews";
import SubNews from "../../layouts/news/SubNews";
import styles from "./MainNewsSection.module.scss";
import SectionHeader from "../../layouts/section_header/section_header";

export default function MainNewsSection() {
  return (
    <>
      <SectionHeader
        background={
          "https://prod-media.beinsports.com/image/default_banner.png"
        }
        title={"أهم الأخبار اليومية"}
      />
      <MainNews />
      <div className={styles.subNews}>
        <SubNews
          categorie={"كأس الاتحاد الإنجليزي"}
          title={"مواجهة مليئة بالإثارة بين مانشستر يونايتد وليفربول"}
        />
        <SubNews
          categorie={"كأس الاتحاد الإنجليزي"}
          title={"مواجهة مليئة بالإثارة بين مانشستر يونايتد وليفربول"}
        />
        <SubNews
          categorie={"كأس الاتحاد الإنجليزي"}
          title={"مواجهة مليئة بالإثارة بين مانشستر يونايتد وليفربول"}
        />
        <SubNews
          categorie={"كأس الاتحاد الإنجليزي"}
          title={"مواجهة مليئة بالإثارة بين مانشستر يونايتد وليفربول"}
        />
        <SubNews
          categorie={"كأس الاتحاد الإنجليزي"}
          title={"مواجهة مليئة بالإثارة بين مانشستر يونايتد وليفربول"}
        />
      </div>
    </>
  );
}
