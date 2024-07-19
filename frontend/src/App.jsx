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
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const getTodayDate = () => {
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];
  return formattedDate;
};

export default function App() {
  const queryClient = new QueryClient();

  const theme = createTheme({
    components: {
      // * Textfield
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            padding: "0px",
            // paddingLeft: "6px",
            // paddingRight: "6px",
            borderRadius: "6px",
          },
          input: {
            fontFamily: "Bein-Bold",
            fontSize: "14px",
            padding: "6px 12px",
          },
        },
      },

      // * Alert
      MuiAlert: {
        root: {
          fontFamily: "inherit",
          fontSize: "16px",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 16px",
        },
        message: {
          padding: 0,
        },
        icon: {
          padding: 0,
          margin: 0,
        },
      },
    },
  });

  return (
    <>
      <NavbarTop />
      <NavbarMain />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </QueryClientProvider>
      <Footer />
    </>
  );
}
