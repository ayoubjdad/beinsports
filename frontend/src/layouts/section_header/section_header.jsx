import React from "react";
import Button from "../../components/button/button";
import styles from "./section_header.module.scss";

export default function SectionHeader({
  background,
  competitionLogo,
  title,
  buttonText,
}) {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${background})`,
        color: !background && "black",
      }}
    >
      <div className={styles.title_container}>
        {competitionLogo && (
          <img
            alt="logoComp"
            src={competitionLogo}
            style={{ height: "36px" }}
          />
        )}
        <span className={styles.title}>{title}</span>
      </div>
      <Button
        icon={<i className="fi fi-rr-arrow-small-left" />}
        title={buttonText || "المزيد"}
      />
    </div>
  );
}
