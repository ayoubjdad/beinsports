import React from "react";
import MainNews from "../../layouts/news/MainNews";
import SubNews from "../../layouts/news/SubNews";
import styles from "./MainNewsSection.module.scss";
import SectionHeader from "../../layouts/section_header/section_header";
import Button from "../../components/button/button";

export default function MainNewsSection() {
  return (
    <div style={{ marginBottom: "10px" }}>
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
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <hr
            style={{
              borderTop: "1px solid #ebebeb",
              width: "40%",
              marginLeft: "1.25rem",
            }}
          />
          <Button
            title={"أظهر المزيد"}
            icon={<i className="fi fi-br-angle-small-down" />}
            style={{ color: "#5c2d91", borderColor: "#5c2d91" }}
          />
          <hr
            style={{
              borderTop: "1px solid #ebebeb",
              width: "40%",
              marginRight: "1.25rem",
            }}
          />
        </div>
      </div>
    </div>
  );
}
