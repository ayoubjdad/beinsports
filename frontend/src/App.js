import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./sections/footer/Footer";
import Article from "./pages/article/Article";
import NavbarMain from "./sections/Navbar/NavbarMain/NavbarMain";
import NavbarTop from "./sections/Navbar/NavbarTop/NavbarTop";
import styles from "./App.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNew from "./pages/article/add-new/AddNew";
import GlobalStandings from "./sections/Standings/GlobalStandings/GlobalStandings";
import Home from "./pages/home/Home";

export const arabicTeamsNames = [
  { id: 24394, name: "الجيش الملكي" },
  { id: 41757, name: "الرجاء الرياضي" },
  { id: 80395, name: "نهضة بركان" },
  { id: 55027, name: "اتحاد الفتح الرياضي" },
  { id: 36268, name: "الوداد الرياضي" },
  { id: 55037, name: "أولمبيك آسفي" },
  { id: 118834, name: "إتحاد تواركة" },
  { id: 55049, name: "المغرب التطواني" },
  { id: 263373, name: "نهضة الزمامرة" },
  { id: 55035, name: "المغرب الفاسي" },
  { id: 55039, name: "حسنية أكادير" },
  { id: 87180, name: "اتحاد طنجة" },
  { id: 327830, name: "شباب المحمدية" },
  { id: 297607, name: "الشباب الرياضي السوالم" },
  { id: 170588, name: "مولودية وجدة" },
  { id: 118830, name: "يوسفية برشيد" },
];

export default function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <NavbarTop />
      <NavbarMain />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className={styles.content}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/post" element={<Article />} />
              <Route path="/post/new" element={<AddNew />} />
              <Route path="/standings" element={<GlobalStandings />} />
            </Routes>
          </div>
        </BrowserRouter>
      </QueryClientProvider>
      <Footer />
    </>
  );
}
