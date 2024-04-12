import React, { useState } from "react";
import SubNews from "../../layouts/news/SubNews";
import SectionHeader from "../../layouts/SectionHeader/SectionHeader";
import styles from "./Article.module.scss";
import Tags from "../../sections/body/tags/Tags";

const path = ["رياضات ميكانيكية", "رياضات ميكانيكية", "رياضات ميكانيكية"];

const Path = () => {
  return (
    <div className={styles.path}>
      {path.map((element, index) => {
        return (
          <>
            {index !== 0 && <i className="fi fi-rr-angle-small-left" />}
            <div style={{ fontWeight: 900 }}>{element}</div>
          </>
        );
      })}
    </div>
  );
};

function convertTimestamp(timestamp) {
  // Create a new Date object from the timestamp (in milliseconds)
  var date = new Date(timestamp);

  // Extract the components of the date and time
  var day = date.getDate();
  var month = date.getMonth() + 1; // Month is zero-based, so we add 1
  var year = date.getFullYear();
  var hours = date.getHours();
  var minutes = date.getMinutes();

  // Add leading zeros if necessary
  day = (day < 10 ? "0" : "") + day;
  month = (month < 10 ? "0" : "") + month;
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;

  // Construct the formatted date and time string
  var formattedDate = day + "/" + month + "/" + year;
  var formattedTime = hours + ":" + minutes;

  // Return the formatted string
  return formattedDate + " - " + formattedTime;
}

export default function Article() {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const formattedDateTime = convertTimestamp(Date.now());

  return (
    <>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            textAlign: "center",
            padding: "32px",
            fontSize: "16px",
            display: "grid",
            gap: "20px",
            borderRadius: "8px",
            boxShadow: "rgba(145, 158, 171, 0.16) 0px 12px 24px -4px",
          }}
        >
          <div>
            <img
              alt="logo"
              src="https://www.beinsports.com/_next/static/media/bein_logo.af017869.webp?ver=06-02-2024?w=128&q=75"
              srcset="https://www.beinsports.com/_next/static/media/bein_logo.af017869.webp?ver=06-02-2024?w=128&q=75"
              style={{ width: "200px" }}
            />
          </div>
          <div>أخبرنا عن تجربتك في موقعنا !سوف يستغرق الأمر سوى بضع دقائق.</div>
          <div
            style={{
              padding: "8px 16px",
              borderRadius: "0.25rem",
              backgroundColor: "#5c2d91",
              color: "white",
            }}
          >
            أخبرنا عن تجربتك
          </div>
        </div>
      </Modal> */}
      <Path />
      <div className={styles.article}>
        <div
        // style={{
        //   boxShadow: "rgba(145, 158, 171, 0.16) 0px 12px 24px -4px",
        // }}
        >
          <div className={styles.articleCard}>
            <img
              alt="مواجهة مليئة بالإثارة بين مانشستر يونايتد وليفربول"
              srcset="https://s1.dmcdn.net/v/VvyK-1bziEaOrXzuo/x240 256w, https://s1.dmcdn.net/v/VvyK-1bziEaOrXzuo/x240 384w, https://s1.dmcdn.net/v/VvyK-1bziEaHAwgWg/x360 640w, https://s2.dmcdn.net/v/VvyK-1bziEaHrA162/x720 1080w, https://s2.dmcdn.net/v/VvyK-1bziEal1eB5z/x1080 1920w, https://s1.dmcdn.net/v/VvyK-1bziEa5tfmOT 3840w"
              src="https://s1.dmcdn.net/v/VvyK-1bziEa5tfmOT"
              decoding="async"
              data-nimg="fill"
              loading="lazy"
              className={styles.articleImage}
            />
            <div className={styles.articleInfo}>
              <div>فورمولا 1</div>
              <div className={styles.shareIcon}>
                <i className="fi fi-rr-share" />
              </div>
            </div>
            <div className={styles.articleTitle}>
              فيرستابن أول المنطلقين في جائزة أستراليا الكبرى للفورمولا 1
            </div>
            <div className={styles.articleDetails}>
              {formattedDateTime} - أيوب اجضاض
            </div>
          </div>

          <hr className={styles.divider} />

          <div className={styles.introduction}>
            انتزع ماكس فيرستابن سائق رد بول وبطل العالم لسباقات فورمولا 1
            للسيارات مركز أول المنطلقين في سباق جائزة أستراليا الأول.
          </div>

          <hr className={styles.divider} />

          <div className={styles.text}>
            واحتل سيرجيو بيريز زميل فيرستابن المركز الثالث لكنه سينطلق من المركز
            السادس بعدما فرض عليه مراقبو السباق عقوبة التأخر ثلاثة مراكز عند
            الانطلاق بعد إعاقته نيكو هولكنبرغ سائق هاس في الحصة الأولى للتجارب
            التأهيلية. وهذا دفع ثنائي مكلارين لاندو نوريس للانطلاق من المركز
            الثالث وأوسكار بياستري من المركز الخامس خلف شارل لوكلير سائق فيراري.
            وشعر فيرستابن بالحسرة خلال تعامله مع المشاكل خلال حصص التجارب لكنه
            قام بلفة مذهلة عندما سجل دقيقة واحدة و15.915 ثانية في فترة ظهيرة
            رائعة على حلبة ألبرت بارك متفوقا بفارق 0.27 ثانية عن ساينز ليقتنص
            مركز أول المنطلقين للمرة الثالثة في الموسم والرابعة على التوالي.
            وقال بطل العالم ثلاث مرات، الذي فاز بسباق العام الماضي بعد احتلال
            مركز أول الانطلاق لأول مرة في ألبرت بارك، "لم يكن الأمر متوقعا قليلا
            خلال التجارب التأهيلية اليوم لكنني سعيد بالتجارب الثالثة. كانت فترة
            صعبة قليلا حتى الآن لكننا نجحنا في أن نكون في هذا المركز في النهاية
            وأنا سعيد للغاية بذلك. (فيراري) يبدو سريعا للغاية أيضا في المسارات
            المستقيمة. لذلك توجد علامة استفهام غدا لكن هذا يجعل الأمر مثيرا".
          </div>

          <hr className={styles.divider} />

          <SectionHeader
            title={"مواضيع ذات صلة"}
            style={{ backgroundColor: "transparent" }}
          />
          <div style={{ display: "grid", gap: "10px" }}>
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
          </div>
        </div>
        <div>
          <Tags
            tagsList={[
              "دوري أبطال أوروبا",
              "رياضات ميركاتو",
              "القناة الأولمبية",
              "NBA",
            ]}
            headerTitle={"فيرستابن أول المنطلقين"}
            style={{ backgroundColor: "white" }}
          />

          <div style={{ display: "grid", gap: "10px", padding: "10px 0" }}>
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
          </div>
        </div>
      </div>
    </>
  );
}
