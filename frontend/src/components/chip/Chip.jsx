import React from "react";
import styles from "./Chip.module.scss";

const Icon = ({ icon }) => {
  // if (icon && icon.slice(0, 2) === "fi") {
  //   return <i className={icon} />;
  // }

  return <img src={icon} />;
};

export default function Chip({
  title,
  index,
  startIcon,
  endIcon,
  isContained = false,
}) {
  return (
    <div
      key={index}
      className={styles.container}
      style={{
        backgroundColor: isContained && "transparent",
        color: isContained && "inherit",
        border: isContained && "1px solid gray",
      }}
    >
      {startIcon && <Icon icon={startIcon} />}
      {title && <span>{title}</span>}
      {endIcon && <Icon icon={endIcon} />}
    </div>
  );
}
