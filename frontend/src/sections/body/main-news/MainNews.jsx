import React, { useMemo, useState } from "react";
import styles from "./MainNews.module.scss";
// import Button from "../../../components/button/button";
import SectionHeader from "../../../layouts/SectionHeader/SectionHeader";
import SubArticle from "../../../layouts/articles/sub-article/SubArticle";
import MainArticle from "../../../layouts/articles/main-article/MainArticle";

export default function MainNews({
  headerBackground,
  headerTitle,
  headerButtonText,
  news,
}) {
  const [skip, setSkip] = useState(false);

  const sortedNews = useMemo(() => {
    const filtredNews = news.sort((a, b) => b.pub_date - a.pub_date);

    if (!skip) {
      return filtredNews.slice(1, 5);
    }

    return filtredNews.slice(1, 10);
  }, [news, skip]);

  return (
    <div className={styles.container}>
      <SectionHeader
        background={headerBackground}
        title={headerTitle}
        buttonText={headerButtonText}
      />
      <MainArticle
        categorie={"كأس الاتحاد الإنجليزي"}
        title={news[0].title}
        image={news[0].image.default_path}
        description={news[0].image.title}
        key={0}
      />
      <div className={styles.subNews}>
        {sortedNews?.map((article, index) => {
          return (
            <SubArticle
              categorie={"كأس الاتحاد الإنجليزي"}
              title={article.title}
              image={article.image.default_path}
              key={index}
            />
          );
        })}
      </div>
      <div className={styles.buttonContainer}>
        <hr className={styles.separator} />
        {/* <Button
          title={"أظهر المزيد"}
          icon={<i className="fi fi-br-angle-small-down" />}
          style={{
            color: "#5c2d91",
            borderColor: "#5c2d91",
          }}
          onClick={() => setSkip(!skip)}
        /> */}
        <hr className={styles.separator} />
      </div>
    </div>
  );
}
