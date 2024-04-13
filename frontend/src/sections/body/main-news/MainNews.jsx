import React, { useState } from "react";
import styles from "./MainNews.module.scss";
import Button from "../../../components/button/button";
import SectionHeader from "../../../layouts/SectionHeader/SectionHeader";
import SubArticle from "../../../layouts/articles/SubArticle";
import MainArticle from "../../../layouts/articles/MainArticle";

export default function MainNews({
  headerBackground,
  headerTitle,
  headerButtonText,
  news,
}) {
  const [skip, setSkip] = useState(false);
  const sortedNews = news.sort((a, b) => b.pub_date - a.pub_date);

  return (
    <div className={styles.container}>
      <SectionHeader
        background={headerBackground}
        title={headerTitle}
        buttonText={headerButtonText}
      />
      <MainArticle
        categorie={"كأس الاتحاد الإنجليزي"}
        title={sortedNews[0].title}
        image={sortedNews[0].image.default_path}
        description={sortedNews[0].image.title}
      />
      <div className={styles.subNews}>
        {sortedNews?.map((article, index) => {
          if (index === 0 || index > 5) {
            return null;
          }

          return (
            <SubArticle
              categorie={"كأس الاتحاد الإنجليزي"}
              title={article.title}
              image={article.image.default_path}
            />
          );
        })}

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
