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

export const featuredTeams = [
  "Manchester City",
  "Liverpool FC",
  "Chelsea FC",
  "Manchester United",
  "Arsenal FC",
  "Tottenham Hotspur",
  "FC Barcelona",
  "Real Madrid CF",
  "Atletico Madrid",
  "Sevilla FC",
  "Villarreal CF",
  "Real Sociedad",
  "Juventus FC",
  "AC Milan",
  "Inter Milan",
  "AS Roma",
  "Napoli",
  "Lazio",
  "FC Bayern M\u00fcnchen", // "Bayern Munich",
  "Borussia Dortmund",
  "Bayer Leverkusen",
  "Paris Saint-Germain (PSG)",
  "Olympique de Marseille",
  "FC Porto",
  "SL Benfica",
  "Sporting CP",

  {
    uniqueTournaments: [
      {
        name: "European Championship",
        slug: "european-championship",
        primaryColorHex: "#293cdb",
        secondaryColorHex: "#00ba5d",
        category: {
          name: "Europe",
          slug: "europe",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 1465,
          flag: "europe",
        },
        userCount: 439433,
        id: 1,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "Copa Am\u00e9rica",
        slug: "copa-america",
        primaryColorHex: "#0A2357",
        secondaryColorHex: "#F70F17",
        category: {
          name: "South America",
          slug: "south-america",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 1470,
          flag: "south-america",
        },
        userCount: 229963,
        id: 133,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "World Championship",
        slug: "world-championship",
        primaryColorHex: "#d20a11",
        secondaryColorHex: "#e8bb57",
        category: {
          name: "World",
          slug: "world",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 1468,
          flag: "international",
        },
        userCount: 1169836,
        id: 16,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "UEFA Champions League",
        slug: "uefa-champions-league",
        primaryColorHex: "#062b5c",
        secondaryColorHex: "#086aab",
        category: {
          name: "Europe",
          slug: "europe",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 1465,
          flag: "europe",
        },
        userCount: 1595984,
        id: 7,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "UEFA Europa League",
        slug: "uefa-europa-league",
        secondaryColorHex: "#f37d25",
        category: {
          name: "Europe",
          slug: "europe",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 1465,
          flag: "europe",
        },
        userCount: 737902,
        id: 679,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "European Championship, Qualification",
        slug: "european-championship-qualification",
        primaryColorHex: "#182026",
        secondaryColorHex: "#730000",
        category: {
          name: "Europe",
          slug: "europe",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 1465,
          flag: "europe",
        },
        userCount: 256199,
        id: 27,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "Premier League",
        slug: "premier-league",
        primaryColorHex: "#3c1c5a",
        secondaryColorHex: "#f80158",
        category: {
          name: "England",
          slug: "england",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 1,
          flag: "england",
          alpha2: "EN",
        },
        userCount: 1634674,
        id: 17,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "LaLiga",
        slug: "laliga",
        primaryColorHex: "#2f4a89",
        secondaryColorHex: "#f4a32e",
        category: {
          name: "Spain",
          slug: "spain",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 32,
          flag: "spain",
          alpha2: "ES",
        },
        userCount: 1086109,
        id: 8,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "Copa del Rey",
        slug: "copa-del-rey",
        primaryColorHex: "#221C35",
        secondaryColorHex: "#fe0235",
        category: {
          name: "Spain",
          slug: "spain",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 32,
          flag: "spain",
          alpha2: "ES",
        },
        userCount: 227879,
        id: 329,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "Bundesliga",
        slug: "bundesliga",
        primaryColorHex: "#e2080e",
        secondaryColorHex: "#8e0902",
        category: {
          name: "Germany",
          slug: "germany",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 30,
          flag: "germany",
          alpha2: "DE",
        },
        userCount: 748298,
        id: 35,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "Serie A",
        slug: "serie-a",
        primaryColorHex: "#09519e",
        secondaryColorHex: "#008fd7",
        category: {
          name: "Italy",
          slug: "italy",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 31,
          flag: "italy",
          alpha2: "IT",
        },
        userCount: 878661,
        id: 23,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "Ligue 1",
        slug: "ligue-1",
        primaryColorHex: "#091c3e",
        secondaryColorHex: "#a9c011",
        category: {
          name: "France",
          slug: "france",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 7,
          flag: "france",
          alpha2: "FR",
        },
        userCount: 614755,
        id: 34,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "Eredivisie",
        slug: "eredivisie",
        primaryColorHex: "#292766",
        secondaryColorHex: "#7c79c3",
        category: {
          name: "Netherlands",
          slug: "netherlands",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 35,
          flag: "netherlands",
          alpha2: "NL",
        },
        userCount: 201079,
        id: 37,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "Africa Cup of Nations",
        slug: "africa-cup-of-nations",
        primaryColorHex: "#00752e",
        secondaryColorHex: "#edc73e",
        category: {
          name: "Africa",
          slug: "africa",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 1466,
          flag: "africa",
        },
        userCount: 392081,
        id: 270,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "UEFA Europa Conference League",
        slug: "uefa-europa-conference-league",
        secondaryColorHex: "#04be15",
        category: {
          name: "Europe",
          slug: "europe",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 1465,
          flag: "europe",
        },
        userCount: 357248,
        id: 17015,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "Brasileir\u00e3o S\u00e9rie A",
        slug: "brasileirao-serie-a",
        primaryColorHex: "#C7FF00",
        secondaryColorHex: "#969696",
        category: {
          name: "Brazil",
          slug: "brazil",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 13,
          flag: "brazil",
          alpha2: "BR",
        },
        userCount: 314725,
        id: 325,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "UEFA Nations League",
        slug: "uefa-nations-league",
        primaryColorHex: "#3a4179",
        secondaryColorHex: "#e5a422",
        category: {
          name: "Europe",
          slug: "europe",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 1465,
          flag: "europe",
        },
        userCount: 272113,
        id: 10783,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "CONMEBOL Libertadores",
        slug: "conmebol-libertadores",
        primaryColorHex: "#573215",
        secondaryColorHex: "#dfaf49",
        category: {
          name: "South America",
          slug: "south-america",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 1470,
          flag: "south-america",
        },
        userCount: 243738,
        id: 384,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "Club World Championship",
        slug: "club-world-championship",
        primaryColorHex: "#8d1536",
        secondaryColorHex: "#0bbda4",
        category: {
          name: "World",
          slug: "world",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 1468,
          flag: "international",
        },
        userCount: 195239,
        id: 357,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "World Championship Qual. CONMEBOL",
        slug: "world-championship-qual-conmebol",
        primaryColorHex: "#9a1133",
        secondaryColorHex: "#c11541",
        category: {
          name: "South America",
          slug: "south-america",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 1470,
          flag: "south-america",
        },
        userCount: 160713,
        id: 295,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "World Championship Qual. UEFA",
        slug: "world-championship-qual-uefa",
        primaryColorHex: "#9a1133",
        secondaryColorHex: "#c11541",
        category: {
          name: "Europe",
          slug: "europe",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 1465,
          flag: "europe",
        },
        userCount: 155065,
        id: 11,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "CAF Champions League",
        slug: "caf-champions-league",
        primaryColorHex: "#ebbf03",
        secondaryColorHex: "#3a292a",
        category: {
          name: "Africa",
          slug: "africa",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 1466,
          flag: "africa",
        },
        userCount: 146593,
        id: 1054,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "World Championship Women",
        slug: "world-championship-women",
        primaryColorHex: "#3099ff",
        secondaryColorHex: "#fcc831",
        category: {
          name: "World",
          slug: "world",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 1468,
          flag: "international",
        },
        userCount: 112859,
        id: 290,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "AFC Asian Cup",
        slug: "afc-asian-cup",
        primaryColorHex: "#FCBD00",
        secondaryColorHex: "#FC1302",
        category: {
          name: "Asia",
          slug: "asia",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 1467,
          flag: "asia",
        },
        userCount: 109237,
        id: 246,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "World Championship Qual. CAF ",
        slug: "world-championship-qual-caf",
        primaryColorHex: "#9a1133",
        secondaryColorHex: "#c11541",
        category: {
          name: "Africa",
          slug: "africa",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 1466,
          flag: "africa",
        },
        userCount: 77473,
        id: 13,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "Olympic Games",
        slug: "olympic-games",
        primaryColorHex: "#8b2130",
        secondaryColorHex: "#b11e33",
        category: {
          name: "World",
          slug: "world",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 1468,
          flag: "international",
        },
        userCount: 53910,
        id: 436,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "World Championship Qual. AFC",
        slug: "world-championship-qual-afc",
        primaryColorHex: "#9a1133",
        secondaryColorHex: "#c11541",
        category: {
          name: "Asia",
          slug: "asia",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 1467,
          flag: "asia",
        },
        userCount: 42141,
        id: 308,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "World Championship Qual. CONCACAF",
        slug: "world-championship-qual-concacaf",
        primaryColorHex: "#9a1133",
        secondaryColorHex: "#c11541",
        category: {
          name: "North & Central America",
          slug: "north-central-america",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 1469,
          flag: "north-and-central-america",
        },
        userCount: 26258,
        id: 14,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "World Championship Qual., Inter-Confederation",
        slug: "world-championship-qual-inter-confederation",
        primaryColorHex: "#d20a11",
        secondaryColorHex: "#e8bb57",
        category: {
          name: "World",
          slug: "world",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 1468,
          flag: "international",
        },
        userCount: 22447,
        id: 10618,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "Olympic Games Women",
        slug: "olympic-games-women",
        primaryColorHex: "#8b2130",
        secondaryColorHex: "#b11e33",
        category: {
          name: "World",
          slug: "world",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 1468,
          flag: "international",
        },
        userCount: 16077,
        id: 437,
        displayInverseHomeAwayTeams: false,
      },
      {
        name: "World Championship Qual. OFC",
        slug: "world-championship-qual-ofc",
        primaryColorHex: "#9a1133",
        secondaryColorHex: "#c11541",
        category: {
          name: "Oceania",
          slug: "oceania",
          sport: {
            name: "Football",
            slug: "football",
            id: 1,
          },
          id: 1471,
          flag: "oceania",
        },
        userCount: 9742,
        id: 309,
        displayInverseHomeAwayTeams: false,
      },
    ],
    topUniqueTournamentIds: [7, 679, 17, 8, 35, 23, 34, 37, 325, 384, 1054, 16],
  },
];

const theme = createTheme({
  components: {
    MuiAlert: {
      styleOverrides: {
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
  },
});

export default function App() {
  const queryClient = new QueryClient();
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
