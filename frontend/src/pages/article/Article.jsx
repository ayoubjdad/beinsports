import React, { useState } from "react";
import SubNews from "../../layouts/news/SubNews";
import SectionHeader from "../../layouts/section_header/section_header";
import { Modal } from "@mui/material";

export default function Article() {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

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
      <div
        style={{
          display: "flex",
          gap: "6px",
          fontSize: "16px",
          fontWeight: 300,
          color: "#aeaeae",
          margin: "16px auto",
          maxWidth: "80%",
        }}
      >
        <div style={{ fontWeight: 900 }}>رياضات ميكانيكية</div>
        <i className="fi fi-rr-angle-small-left" />
        <div>رياضات ميكانيكية</div>
        <i className="fi fi-rr-angle-small-left" />
        <div>رياضات ميكانيكية</div>
        <i className="fi fi-rr-angle-small-left" />
        <div>رياضات ميكانيكية</div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "4fr 2fr",
          margin: "16px auto",
          maxWidth: "80%",
          gap: "20px",
        }}
      >
        <div
        // style={{
        //   boxShadow: "rgba(145, 158, 171, 0.16) 0px 12px 24px -4px",
        // }}
        >
          <div style={{ display: "grid", gap: "20px" }}>
            <img
              alt="مواجهة مليئة بالإثارة بين مانشستر يونايتد وليفربول"
              srcset="https://s1.dmcdn.net/v/VvyK-1bziEaOrXzuo/x240 256w, https://s1.dmcdn.net/v/VvyK-1bziEaOrXzuo/x240 384w, https://s1.dmcdn.net/v/VvyK-1bziEaHAwgWg/x360 640w, https://s2.dmcdn.net/v/VvyK-1bziEaHrA162/x720 1080w, https://s2.dmcdn.net/v/VvyK-1bziEal1eB5z/x1080 1920w, https://s1.dmcdn.net/v/VvyK-1bziEa5tfmOT 3840w"
              src="https://s1.dmcdn.net/v/VvyK-1bziEa5tfmOT"
              decoding="async"
              data-nimg="fill"
              loading="lazy"
              style={{
                width: "100%",
                height: "344px",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                fontSize: "18px",
                color: "#5c2d91",
                display: "flex",
                alignContent: "center",
                justifyContent: "space-between",
              }}
            >
              <div>فورمولا 1</div>
              <div
                style={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: "50px",
                  padding: "8px",
                }}
              >
                <i className="fi fi-rr-share" />
              </div>
            </div>
            <div style={{ fontSize: "36px", fontWeight: 900 }}>
              فيرستابن أول المنطلقين في جائزة أستراليا الكبرى للفورمولا 1
            </div>
            <div
              style={{ fontSize: "16px", fontWeight: 300, color: "#aeaeae" }}
            >
              23/03/2024 - 09:08 - by Reuters
            </div>
          </div>

          <hr
            style={{
              borderTop: "1px solid #ebebeb",
              marginLeft: "1.25rem",
              margin: "48px 0",
            }}
          />

          <div
            style={{ fontSize: "20px", lineHeight: "30px", fontWeight: 900 }}
          >
            انتزع ماكس فيرستابن سائق رد بول وبطل العالم لسباقات فورمولا 1
            للسيارات مركز أول المنطلقين في سباق جائزة أستراليا الكبرى اليوم
            السبت وسينطلق إلى جواره من الصف الأول كارلوس ساينز سائق فيراري بعد
            أسبوعين من خضوعه لجراحة الزائدة الدودية.
          </div>

          <hr
            style={{
              borderTop: "1px solid #ebebeb",
              marginLeft: "1.25rem",
              margin: "48px 0",
            }}
          />
          <div style={{ fontSize: "20px", lineHeight: "30px" }}>
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

          <hr
            style={{
              borderTop: "1px solid #ebebeb",
              marginLeft: "1.25rem",
              margin: "48px 0",
            }}
          />

          <SectionHeader title={"أهم الأخبار اليومية"} />
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
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              color: "#5c2d91",
              fontWeight: 900,
            }}
          >
            <div
              style={{
                backgroundColor: "#f5f5f5",
                padding: "6px 12px",
                borderRadius: "50px",
              }}
            >
              دوري أبطال أوروبا
            </div>
            <div
              style={{
                backgroundColor: "#f5f5f5",
                padding: "6px 12px",
                borderRadius: "50px",
              }}
            >
              رياضات ميركاتو
            </div>
            <div
              style={{
                backgroundColor: "#f5f5f5",
                padding: "6px 12px",
                borderRadius: "50px",
              }}
            >
              NBA
            </div>
            <div
              style={{
                backgroundColor: "#f5f5f5",
                padding: "6px 12px",
                borderRadius: "50px",
              }}
            >
              القناة الأولمبية
            </div>
          </div>
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
