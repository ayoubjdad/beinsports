import React from "react";
import styles from "./MainNews.module.scss";
import Button from "../../../components/button/button";
import SectionHeader from "../../../layouts/SectionHeader/SectionHeader";
import SubArticle from "../../../layouts/articles/SubArticle";
import MainArticle from "../../../layouts/articles/MainArticle";

export default function MainNews({
  headerBackground,
  headerTitle,
  headerButtonText,
}) {
  return (
    <div className={styles.container}>
      <SectionHeader
        background={headerBackground}
        title={headerTitle}
        buttonText={headerButtonText}
      />
      <MainArticle
        categorie={"كأس الاتحاد الإنجليزي"}
        title={"مواجهة مليئة بالإثارة بين مانشستر يونايتد وليفربول"}
      />
      <div className={styles.subNews}>
        <SubArticle
          categorie={"كأس الاتحاد الإنجليزي"}
          title={"مواجهة مليئة بالإثارة بين مانشستر يونايتد وليفربول"}
        />
        <div className={styles.buttonContainer}>
          <hr className={styles.separator} />
          <Button
            title={"أظهر المزيد"}
            icon={<i className="fi fi-br-angle-small-down" />}
            style={{
              color: "#5c2d91",
              borderColor: "#5c2d91",
            }}
          />
          <hr className={styles.separator} />
        </div>
      </div>
    </div>
  );
}
