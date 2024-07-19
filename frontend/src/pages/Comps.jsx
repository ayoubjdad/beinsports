import {
  Box,
  Breadcrumbs,
  Link,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React, { useState } from "react";
import Button from "../components/button/Button";
import Chip from "../components/chip/Chip";
import Input from "../components/input/Input";

const theme = createTheme({
  components: {
    MuiBreadcrumbs: {
      styleOverrides: {
        root: { fontFamily: "inherit" },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: { fontFamily: "inherit" },
      },
    },
  },
});

const Carousel = () => {
  const array = [
    {
      title:
        "أعلن نادي بانسيرايكوس اليوناني، فسخ عقد المهاجم المصري عمرو وردة بالتراضي",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      title:
        "انضم المصري إلى فريقنا في يناير وقدم أقصى ما لديه لتحقيق هدف البقاء",
      image:
        "https://fifpro.org/media/fhmfhvkx/messi-world-cup.jpg?rxy=0.48356841796117644,0.31512414378031967&width=1600&height=1024&rnd=133210253587130000",
    },
    {
      title:
        "وكان عمرو وردة قد انضم إلى الرجاء الرياضي في بداية فترة الانتقالات",
      image:
        "https://s.france24.com/media/display/48615024-e4b0-11eb-9773-005056a90284/w:980/p:16x9/1bb7e4c7fba86598de2f5df9df91cc53fbc8e8c6.jpg",
    },
  ];
  const [index, setIndex] = useState(0);
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 20%, rgba(0,0,0,0.9) 100%), url(${array[index]?.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          border: "1px solid gray",
          padding: "14px",
          borderRadius: "16px",
          justifyContent: "space-between",
          color: "white",
          width: "400px",
          height: "200px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          <Box
            component="i"
            className="fi fi-rr-angle-circle-right"
            onClick={() => {
              if (index + 1 < array?.length) {
                setIndex(index + 1);
              }
            }}
          />
          <Box
            component="i"
            className="fi fi-rr-angle-circle-left"
            onClick={() => {
              if (index - 1 >= 0) {
                setIndex(index - 1);
              }
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div style={{ fontWeight: 900, fontSize: "16px" }}>
            {array[index]?.title}{" "}
          </div>
          <div
            style={{
              color: "white",
              display: "flex",
              gap: "10px",
            }}
          >
            اقرأ المزيد <i className="fi fi-rr-arrow-left" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Comps() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <ThemeProvider theme={theme}>
        <Carousel />
        <div style={{ display: "flex", gap: "10px" }}>
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={<i className="fi fi-rr-angle-small-left" />}
          >
            <Link underline="hover" color="inherit" href="/">
              دوري أبطال أوروبا
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              دوري أبطال أوروبا
            </Link>
            <Typography color="text.primary">دوري أبطال أوروبا</Typography>
          </Breadcrumbs>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <Button
            startIcon={<i className="fi fi-rr-football" />}
            sx={{ backgroundColor: "#5c2d91", color: "white", border: "none" }}
          />
          <Button title={"أهم الأخبار"} />
          <Button
            title={"أهم الأخبار"}
            startIcon={<i className="fi fi-rr-football" />}
          />
          <Button startIcon={<i className="fi fi-rr-football" />} />
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <Input value="أكد فوزي لقجع، رئيس الجامعة الملكية" />
          <Input value="أكد فوزي لقجع، رئيس الجامعة الملكية" isMultiline />
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <Chip title="دوري أبطال أوروبا" />
          <Chip title="دوري أبطال أوروبا" isContained />
          <Chip startIcon={<i className="fi fi-rr-arrow-left" />} />
          <Chip isContained startIcon={<i className="fi fi-rr-arrow-left" />} />
          <Chip
            title="دوري أبطال أوروبا"
            isContained
            endIcon={<i className="fi fi-rr-arrow-left" />}
          />
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "200px",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                borderRadius: "12px",
              }}
              src="data:image/jpeg;base64,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"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "7px 14px",
                gap: "10px",
              }}
            >
              <div>الأوروبية</div>
              <div style={{ fontWeight: 900, fontSize: "16px" }}>
                لقجع: "على الكاف أن يعيد النظر في بطولاته حتى يزيد ربحها
                المالي".
              </div>
              <div
                style={{
                  backgroundColor: "gray",
                  color: "white",
                  display: "flex",
                  gap: "10px",
                  borderRadius: "50px",
                  padding: "4px 10px",
                  width: "fit-content",
                }}
              >
                اقرأ المزيد <i className="fi fi-rr-arrow-left" />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid gray",
              borderRadius: "16px",
              maxWidth: "200px",
              overflow: "hidden",
            }}
          >
            <img src="data:image/jpeg;base64,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" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "14px",
                gap: "10px",
              }}
            >
              <div>الأوروبية</div>
              <div style={{ fontWeight: 900, fontSize: "16px" }}>
                لقجع: "على الكاف أن يعيد النظر في بطولاته حتى يزيد ربحها
                المالي".
              </div>
              <div
                style={{
                  backgroundColor: "gray",
                  color: "white",
                  borderRadius: "50px",
                  padding: "4px 10px",
                  width: "fit-content",
                }}
              >
                <i className="fi fi-rr-arrow-left" />
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0,0,0,0) 20%, rgba(0,0,0,0.9) 100%), url('data:image/jpeg;base64,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')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              border: "1px solid gray",
              padding: "14px",
              borderRadius: "16px",
              maxWidth: "200px",
              justifyContent: "space-between",
              color: "white",
            }}
          >
            <div>الأوروبية</div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div style={{ fontWeight: 900, fontSize: "16px" }}>
                لقجع: "على الكاف أن يعيد النظر في بطولاته حتى يزيد ربحها
                المالي".
              </div>
              <div
                style={{
                  color: "white",
                  display: "flex",
                  gap: "10px",
                }}
              >
                اقرأ المزيد <i className="fi fi-rr-arrow-left" />
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              maxWidth: "500px",
            }}
          >
            <img
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
              src="data:image/jpeg;base64,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"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "7px 14px",
                gap: "10px",
              }}
            >
              <div>الأوروبية</div>
              <div style={{ fontWeight: 900, fontSize: "16px" }}>
                لقجع: "على الكاف أن يعيد النظر في بطولاته حتى يزيد".
              </div>
              <div>
                وأكد النادي اليوناني، في بيان رسمي، عن فسخ تعاقده مع اللاعب
                المصري عمرو وردة، بالتراضي، حيث قال.
              </div>
              <div
                style={{
                  backgroundColor: "gray",
                  color: "white",
                  display: "flex",
                  gap: "10px",
                  borderRadius: "50px",
                  padding: "4px 10px",
                  width: "fit-content",
                }}
              >
                اقرأ المزيد <i className="fi fi-rr-arrow-left" />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid gray",
              borderRadius: "16px",
              maxWidth: "500px",
              height: "150px",
              overflow: "hidden",
            }}
          >
            <img
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
              src="data:image/jpeg;base64,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"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "14px",
                gap: "10px",
              }}
            >
              <div>الأوروبية</div>
              <div style={{ fontWeight: 900, fontSize: "16px" }}>
                لقجع: "على الكاف أن يعيد النظر في بطولاته حتى يزيد ربحها
                المالي".
              </div>
              <div>
                وأكد النادي اليوناني، في بيان رسمي، عن فسخ تعاقده مع اللاعب
                المصري عمرو وردة، بالتراضي، حيث قال.
              </div>
              <div
                style={{
                  backgroundColor: "gray",
                  color: "white",
                  borderRadius: "50px",
                  padding: "4px 10px",
                  width: "fit-content",
                }}
              >
                <i className="fi fi-rr-arrow-left" />
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <div
            style={{
              border: "1px solid gray",
              display: "flex",
              alignItems: "center",
              borderRadius: "16px",
              overflow: "hidden",
              padding: "14px",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <img
                style={{ width: "30px", objectFit: "contain" }}
                src="https://upload.wikimedia.org/wikipedia/fr/thumb/a/a1/Logo_FC_Barcelona.svg/1011px-Logo_FC_Barcelona.svg.png"
              />
              <div>برشلونة</div>
            </div>
            <div style={{ fontSize: "40px" }}>1-1</div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <img
                style={{ width: "30px", objectFit: "contain" }}
                src="https://upload.wikimedia.org/wikipedia/fr/thumb/a/a1/Logo_FC_Barcelona.svg/1011px-Logo_FC_Barcelona.svg.png"
              />
              <div>برشلونة</div>
            </div>
          </div>
          <div
            style={{
              border: "1px solid gray",
              display: "flex",
              alignItems: "center",
              borderRadius: "16px",
              overflow: "hidden",
              padding: "4px 10px",
              height: "fit-content",
              gap: "10px",
            }}
          >
            <img
              style={{ width: "20px" }}
              src="https://upload.wikimedia.org/wikipedia/fr/thumb/a/a1/Logo_FC_Barcelona.svg/1011px-Logo_FC_Barcelona.svg.png"
            />
            <div
              style={{
                backgroundColor: "gray",
                color: "white",
                borderRadius: "16px",
                padding: "0px 10px",
                fontSize: "16px",
              }}
            >
              1-1
            </div>
            <img
              style={{ width: "20px" }}
              src="https://upload.wikimedia.org/wikipedia/fr/thumb/a/a1/Logo_FC_Barcelona.svg/1011px-Logo_FC_Barcelona.svg.png"
            />
          </div>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid gray",
              borderRadius: "16px",
              overflow: "hidden",
              width: "300px",
            }}
          >
            <div style={{ padding: "14px" }}>الأهداف</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "7px 14px",
                borderTop: "1px solid gray",
              }}
            >
              <div style={{ fontWeight: 900 }}>1</div>
              <img
                style={{
                  width: "40px",
                  objectFit: "contain",
                  border: "1px solid gray",
                  borderRadius: "50px",
                }}
                src="https://api.sofascore.app/api/v1/player/934235/image"
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>
                  <div style={{ fontWeight: 900, fontSize: "16px" }}>
                    بوكايو ساكا
                  </div>
                  <div>أرسنال</div>
                </div>
                <div style={{ fontWeight: 900, fontSize: "24px" }}>19</div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "7px 14px",
                backgroundColor: "#e5e5e5",
              }}
            >
              <div style={{ fontWeight: 900 }}>1</div>
              <img
                style={{
                  width: "40px",
                  objectFit: "contain",
                  border: "1px solid gray",
                  borderRadius: "50px",
                }}
                src="https://api.sofascore.app/api/v1/player/934235/image"
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>
                  <div style={{ fontWeight: 900, fontSize: "16px" }}>
                    بوكايو ساكا
                  </div>
                  <div>أرسنال</div>
                </div>
                <div style={{ fontWeight: 900, fontSize: "24px" }}>19</div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "7px 14px",
              }}
            >
              <div style={{ fontWeight: 900 }}>1</div>
              <img
                style={{
                  width: "40px",
                  objectFit: "contain",
                  border: "1px solid gray",
                  borderRadius: "50px",
                }}
                src="https://api.sofascore.app/api/v1/player/934235/image"
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>
                  <div style={{ fontWeight: 900, fontSize: "16px" }}>
                    بوكايو ساكا
                  </div>
                  <div>أرسنال</div>
                </div>
                <div style={{ fontWeight: 900, fontSize: "24px" }}>19</div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "7px 14px",
                backgroundColor: "#e5e5e5",
              }}
            >
              <div style={{ fontWeight: 900 }}>1</div>
              <img
                style={{
                  width: "40px",
                  objectFit: "contain",
                  border: "1px solid gray",
                  borderRadius: "50px",
                }}
                src="https://api.sofascore.app/api/v1/player/934235/image"
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>
                  <div style={{ fontWeight: 900, fontSize: "16px" }}>
                    بوكايو ساكا
                  </div>
                  <div>أرسنال</div>
                </div>
                <div style={{ fontWeight: 900, fontSize: "24px" }}>19</div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "7px 14px 14px",
              }}
            >
              <div style={{ fontWeight: 900 }}>1</div>
              <img
                style={{
                  width: "40px",
                  objectFit: "contain",
                  border: "1px solid gray",
                  borderRadius: "50px",
                }}
                src="https://api.sofascore.app/api/v1/player/934235/image"
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>
                  <div style={{ fontWeight: 900, fontSize: "16px" }}>
                    بوكايو ساكا
                  </div>
                  <div>أرسنال</div>
                </div>
                <div style={{ fontWeight: 900, fontSize: "24px" }}>19</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid gray",
              borderRadius: "16px",
              width: "100%",
              padding: "14px",
            }}
          >
            <div>الأهدافالأهدافالأهدافالأهداف</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div
                style={{
                  padding: "4px 12px",
                  borderRadius: "16px",
                  backgroundColor: "gray",
                  color: "white",
                }}
              >
                الأهداف
              </div>
              <i className="fi fi-br-cross" />
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div
            style={{
              backgroundImage:
                "url('https://static.wixstatic.com/media/bc3332_a926501605dc4fc8b595bc2ca837f76a~mv2.jpg/v1/crop/x_0,y_0,w_1920,h_1646/fill/w_1920,h_1607,al_c,q_90,enc_auto/Beat%20LaLiga.jpg')",
              backgroundPosition: "50%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              backgroundColor: "gray",
              color: "white",
              borderRadius: "16px",
              // width: "100%",
              padding: "14px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img
                style={{ width: "26px" }}
                src="https://seeklogo.com/images/L/laliga-logo-389DC0DB9C-seeklogo.com.png"
              />
              <div style={{ fontSize: "18px" }}>الدوري الإسباني</div>
            </div>
            <Button
              endIcon={<i className="fi fi-rr-arrow-left" />}
              sx={{ color: "white", border: "1px solid white" }}
              title="أهم الأخبار"
            />
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
