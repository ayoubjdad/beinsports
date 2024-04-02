import React from "react";
import MainNews from "../../layouts/news/MainNews";
import SubNews from "../../layouts/news/SubNews";
import styles from "./MainNewsSection.module.scss";
import SectionHeader from "../../layouts/SectionHeader/SectionHeader";
import Button from "../../components/button/button";

export default function MainNewsSection({
  headerBackground,
  headerTitle,
  headerButtonText,
}) {
  return (
    <div className={styles.container} style={{ marginBottom: "10px" }}>
      <SectionHeader
        background={headerBackground}
        title={headerTitle}
        buttonText={headerButtonText}
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
              width: "100%",
              marginLeft: "1.25rem",
            }}
          />
          <Button
            title={"أظهر المزيد"}
            icon={<i className="fi fi-br-angle-small-down" />}
            style={{
              color: "#5c2d91",
              borderColor: "#5c2d91",
            }}
          />
          <hr
            style={{
              borderTop: "1px solid #ebebeb",
              width: "100%",
              marginRight: "1.25rem",
            }}
          />
        </div>
      </div>
    </div>
  );
}
