import React from "react";
import Content from "./sections/Content/Content";
import Footer from "./sections/Footer/Footer";
import Article from "./pages/article/Article";
import NavbarMain from "./sections/Navbar/NavbarMain/NavbarMain";
import NavbarTop from "./sections/Navbar/NavbarTop/NavbarTop";
import styles from "./App.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNew from "./pages/article/AddNew/AddNew";

export const colorPalette = {
  purple: "#5c2d91",
};

export default function App() {
  return (
    <BrowserRouter>
      <NavbarTop />
      <NavbarMain />
      <div className={styles.content}>
        <Routes>
          <Route exact path="/" element={<Content />} />
          <Route path="/article" element={<Article />} />
          <Route path="/post/new" element={<AddNew />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
