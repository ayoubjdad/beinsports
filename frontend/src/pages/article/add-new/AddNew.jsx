import React from "react";
import styles from "./AddNew.module.scss";
import Input, { InputTextArea } from "../../../components/input/Input";
import Switch from "../../../components/switch/Switch";
import Button from "../../../components/button/button";
import Upload from "../../../components/upload/Upload";

export default function AddNew() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>إنشاء مشاركة جديدة</div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input placeholder="العنوان" />
        <Input placeholder="الوصف" />
        <InputTextArea placeholder="النص" />
        <Input placeholder="روابط" />

        <Upload />
        <div className={styles.bottom}>
          <Switch />
          <div className={styles.btns}>
            <Button
              title={"حفظ"}
              style={{ backgroundColor: "#5c2d91", color: "white" }}
            />
            <Button
              title={"إلغاء"}
              style={{
                border: "1px solid #5c2d91",
                borderColor: "#5c2d91",
                color: "#5c2d91",
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
