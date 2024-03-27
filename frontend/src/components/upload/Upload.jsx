import React, { useRef } from "react";
import styles from "./Upload.module.scss";
import cn from "classnames";

export default function Upload() {
  const uploadRef = useRef();

  const uploadClicked = () => {
    uploadRef.current.click();
  };

  return (
    <>
      <input
        style={{ display: "none" }}
        ref={uploadRef}
        type="file"
        // onChange={onFileChange}
      />

      <div
        className={styles.container}
        onClick={uploadClicked}
        //   onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className={styles.button}>
          <p className={cn(styles.title)}>
            قم بإسقاط أو تحديد الملف قم بإسقاط الملفات هنا أو انقر فوق
          </p>
        </div>
      </div>
    </>
  );
}
