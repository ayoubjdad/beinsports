import React from "react";
import Content from "./sections/Content/Content";
import NavbarTop from "./sections/Navbar/NavbarTop";
import NavbarMain from "./sections/Navbar/NavbarMain";
import Footer from "./sections/Footer/Footer";

export const colorPalette = {
  purple: "#5c2d91",
};

export default function App() {
  return (
    <>
      <NavbarTop />
      <NavbarMain />
      <Content />
      <Footer />
    </>
  );
}
