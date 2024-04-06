import React from "react";
import Button from "../../components/button/button";
import styles from "./SectionHeader.module.scss";

export default function SectionHeader({
  background,
  competitionLogo,
  title,
  buttonText,
  style,
  link,
}) {
  const redirect = (link) => {
    // <Redirect to={link} />;
  };

  return (
    <div
      className={styles.container}
      style={{
        ...style,
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
      {buttonText && (
        <Button
          icon={<i className="fi fi-rr-arrow-small-left" />}
          title={buttonText}
          onClick={() => redirect(link)}
        />
      )}
    </div>
  );
}
