import React, { useState } from "react";
import styles from "./AddNew.module.scss";
import Input, { InputTextArea } from "../../../components/input/Input";
import Switch from "../../../components/switch/Switch";
// import Button from "../../../components/button/button";
import Upload from "../../../components/upload/Upload";
import Editor from "../../../components/editor/Editor";

export default function AddNew() {
  const [value, setValue] = useState(
    "اد برشلونة بنتيجة جيدة جداً أمام مضيفه باريس سان جيرمان في ذهاب ربع نهائي دوري أبطال أوروبا. اد برشلونة بنتيجة جيدة جداً أمام مضيفه باريس سان جيرمان في ذهاب ربع نهائي دوري أبطال أوروبا. اد برشلونة بنتيجة جيدة جداً أمام مضيفه باريس سان جيرمان في ذهاب ربع نهائي دوري أبطال أوروبا. اد برشلونة بنتيجة جيدة جداً أمام مضيفه باريس سان جيرمان في ذهاب ربع نهائي دوري أبطال أوروبا.اد برشلونة بنتيجة جيدة جداً أمام مضيفه باريس سان جيرمان في ذهاب ربع نهائي دوري أبطال أوروبا.اد برشلونة بنتيجة جيدة جداً أمام مضيفه باريس سان جيرمان في ذهاب ربع نهائي دوري أبطال أوروبا.اد برشلونة بنتيجة جيدة جداً أمام مضيفه باريس سان جيرمان في ذهاب ربع نهائي دوري أبطال أوروبا."
  );

  return (
    <div className={styles.container}>
      <div className={styles.title}>إنشاء مشاركة جديدة</div>
      <form
        className={styles.form}
        // onSubmit={handleSubmit}
      >
        <Input placeholder="العنوان" />
        <Input placeholder="الوصف" />
        <InputTextArea placeholder="النص" />
        <Input placeholder="روابط" />
        <Editor value={value} setValue={setValue} />
        <Upload />
        <div className={styles.bottom}>
          <Switch />
          <div className={styles.btns}>
            {/* <Button
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
            /> */}
          </div>
        </div>
      </form>
    </div>
  );
}
