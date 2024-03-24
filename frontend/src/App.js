import React, { useEffect, useState } from "react";
import Content from "./sections/Content/Content";
import Footer from "./sections/Footer/Footer";
import Article from "./pages/article/Article";
import NavbarMain from "./sections/Navbar/NavbarMain/NavbarMain";
import NavbarTop from "./sections/Navbar/NavbarTop/NavbarTop";

export const colorPalette = {
  purple: "#5c2d91",
};

export default function App() {
  const [categories, setCategories] = useState({});
  const [events, setEvents] = useState({});

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       console.log(":::::: ~ Date.now():", "2022-07-20", getCurrentDate());
  //       const response = await fetch(
  //         // `https://api.sofascore.com/api/v1/sport/football/categories`
  //         `https://api.sofascore.com/api/v1/sport/football/scheduled-events/${getCurrentDate()}`
  //       );
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       // setCategories(data);
  //       setEvents(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <NavbarTop />
      <NavbarMain />
      {/* <Content /> */}
      <Article />
      <Footer />
    </>
  );
}
