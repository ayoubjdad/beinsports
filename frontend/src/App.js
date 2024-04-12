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

export const news = [
  {
    title:
      'براهيم دياز: "أنتم عظماء للغاية أيها الأنصار.. 90 دقيقة تفصلنا وسنستمر حتى النهاية"',
    absolute_url: "https://www.elbotola.com/article/2024-04-10-19-21-23.html",
    tags: [
      {
        name: "براهيم دياز",
        object_id: "vjxm8ghp03nr6od",
        content_type: "player",
        image_path: "//images.elbotola.com/stats/players/vjxm8ghp03nr6od.png",
        absolute_url:
          "https://www.elbotola.com/analytics/player/vjxm8ghp03nr6od",
      },
      {
        name: "ريال مدريد",
        object_id: "e4wyrn4h111q86p",
        content_type: "team",
        image_path: "//images.elbotola.com/stats/logos/e4wyrn4h111q86p.png",
        absolute_url: "https://www.elbotola.com/analytics/team/e4wyrn4h111q86p",
      },
      {
        name: "المغرب",
        object_id: "56ypq3nh9nzmd7o",
        content_type: "team",
        image_path: "//images.elbotola.com/stats/logos/56ypq3nh9nzmd7o.png",
        absolute_url: "https://www.elbotola.com/analytics/team/56ypq3nh9nzmd7o",
      },
      {
        name: "دوري أبطال أوروبا",
        object_id: "z8yomo4h7wq0j6l",
        content_type: "competition",
        image_path:
          "//images.elbotola.com/stats/competitions/z8yomo4h7wq0j6l.png",
        absolute_url:
          "https://www.elbotola.com/analytics/competition/z8yomo4h7wq0j6l",
      },
    ],
    content_type: "article",
    object_id: "6616e6c72fc6e2b0a16302ba",
    image: {
      default_path:
        "//images2.elbotola.com/article/6616e6c72fc6e2b0a16302ba_default.jpeg",
      thumb_path:
        "//images2.elbotola.com/article/6616e6c72fc6e2b0a16302ba_thumb.jpeg",
    },
    pub_date: 1712776830,
    is_important: false,
    id: "6616e6c860bb1d65c761504f",
    team_A_logo: null,
    team_B_logo: null,
    fs_A: null,
    fs_B: null,
    winner: null,
    with_highlight: false,
    team_A_name: null,
    team_B_name: null,
    competition_name: null,
    competition_id: null,
    has_copyright: true,
    lang: "ar",
  },
  {
    title:
      "غوارديولا: \"التعادل أمام الريال نتيجة جيدة لأنها في 'البرنابيو' وسنسعى لتحقيق التأهل على ملعبنا\"",
    absolute_url: "https://www.elbotola.com/article/2024-04-10-00-35-965.html",
    tags: [
      {
        name: "ريال مدريد",
        object_id: "e4wyrn4h111q86p",
        content_type: "team",
        image_path: "//images.elbotola.com/stats/logos/e4wyrn4h111q86p.png",
        absolute_url: "https://www.elbotola.com/analytics/team/e4wyrn4h111q86p",
      },
      {
        name: "مانشستر سيتي",
        object_id: "p4jwq2ghd57m0ve",
        content_type: "team",
        image_path: "//images.elbotola.com/stats/logos/p4jwq2ghd57m0ve.png",
        absolute_url: "https://www.elbotola.com/analytics/team/p4jwq2ghd57m0ve",
      },
      {
        name: "دوري أبطال أوروبا",
        object_id: "z8yomo4h7wq0j6l",
        content_type: "competition",
        image_path:
          "//images.elbotola.com/stats/competitions/z8yomo4h7wq0j6l.png",
        absolute_url:
          "https://www.elbotola.com/analytics/competition/z8yomo4h7wq0j6l",
      },
    ],
    content_type: "article",
    object_id: "6615debfc4b7a6a5ae9f8759",
    image: {
      default_path:
        "//images2.elbotola.com/article/6615debfc4b7a6a5ae9f8759_default.jpeg",
      thumb_path:
        "//images2.elbotola.com/article/6615debfc4b7a6a5ae9f8759_thumb.jpeg",
    },
    pub_date: 1712746830,
    is_important: false,
    id: "6616726160bb1d65c73ca23c",
    team_A_logo: null,
    team_B_logo: null,
    fs_A: null,
    fs_B: null,
    winner: null,
    with_highlight: false,
    team_A_name: null,
    team_B_name: null,
    competition_name: null,
    competition_id: null,
    has_copyright: true,
    lang: "ar",
  },
  {
    title:
      "دوري الأبطال/ قمة ربع النهائي بين ريال مدريد ومانشستر سيتي تنتهي بالتعادل (3-3)",
    absolute_url: "https://www.elbotola.com/article/2024-04-09-21-19-725.html",
    tags: [
      {
        name: "ريال مدريد",
        object_id: "e4wyrn4h111q86p",
        content_type: "team",
        image_path: "//images.elbotola.com/stats/logos/e4wyrn4h111q86p.png",
        absolute_url: "https://www.elbotola.com/analytics/team/e4wyrn4h111q86p",
      },
      {
        name: "مانشستر سيتي",
        object_id: "p4jwq2ghd57m0ve",
        content_type: "team",
        image_path: "//images.elbotola.com/stats/logos/p4jwq2ghd57m0ve.png",
        absolute_url: "https://www.elbotola.com/analytics/team/p4jwq2ghd57m0ve",
      },
      {
        name: "دوري أبطال أوروبا",
        object_id: "z8yomo4h7wq0j6l",
        content_type: "competition",
        image_path:
          "//images.elbotola.com/stats/competitions/z8yomo4h7wq0j6l.png",
        absolute_url:
          "https://www.elbotola.com/analytics/competition/z8yomo4h7wq0j6l",
      },
    ],
    content_type: "article",
    object_id: "6615b0d6769437282ac10e35",
    image: {
      default_path:
        "//images2.elbotola.com/article/6615b0d6769437282ac10e35_default.jpg",
      thumb_path:
        "//images2.elbotola.com/article/6615b0d6769437282ac10e35_thumb.jpg",
    },
    pub_date: 1712697487,
    is_important: false,
    id: "6615b0d760bb1d65c7e666aa",
    team_A_logo: null,
    team_B_logo: null,
    fs_A: null,
    fs_B: null,
    winner: null,
    with_highlight: false,
    team_A_name: null,
    team_B_name: null,
    competition_name: null,
    competition_id: null,
    has_copyright: true,
    lang: "ar",
  },
  {
    title:
      "تشكيلة مان سيتي الرسمية لمباراة ريال مدريد.. أورتيغا في حراسة المرمى ودي بروين احتياطي وفودن وغريليتش وهالاند في الهجوم",
    absolute_url: "https://www.elbotola.com/article/2024-04-09-17-57-825.html",
    tags: [
      {
        name: "مانشستر سيتي",
        object_id: "p4jwq2ghd57m0ve",
        content_type: "team",
        image_path: "//images.elbotola.com/stats/logos/p4jwq2ghd57m0ve.png",
        absolute_url: "https://www.elbotola.com/analytics/team/p4jwq2ghd57m0ve",
      },
      {
        name: "دوري أبطال أوروبا",
        object_id: "z8yomo4h7wq0j6l",
        content_type: "competition",
        image_path:
          "//images.elbotola.com/stats/competitions/z8yomo4h7wq0j6l.png",
        absolute_url:
          "https://www.elbotola.com/analytics/competition/z8yomo4h7wq0j6l",
      },
      {
        name: "ريال مدريد",
        object_id: "e4wyrn4h111q86p",
        content_type: "team",
        image_path: "//images.elbotola.com/stats/logos/e4wyrn4h111q86p.png",
        absolute_url: "https://www.elbotola.com/analytics/team/e4wyrn4h111q86p",
      },
    ],
    content_type: "article",
    object_id: "66158180769437282ac10e33",
    image: {
      default_path:
        "//images2.elbotola.com/article/66158180769437282ac10e33_default.png",
      thumb_path:
        "//images2.elbotola.com/article/66158180769437282ac10e33_thumb.png",
    },
    pub_date: 1712685057,
    is_important: false,
    id: "6615818160bb1d65c7d3dbd7",
    team_A_logo: null,
    team_B_logo: null,
    fs_A: null,
    fs_B: null,
    winner: null,
    with_highlight: false,
    team_A_name: null,
    team_B_name: null,
    competition_name: null,
    competition_id: null,
    has_copyright: true,
    lang: "ar",
  },
  {
    title:
      'دوري الأبطال/ دياز "احتياطي" في مواجهة ريال مدريد ومانشستر سيتي (19:00 غرينيتش)',
    absolute_url: "https://www.elbotola.com/article/2024-04-09-17-34-789.html",
    tags: [
      {
        name: "براهيم دياز",
        object_id: "vjxm8ghp03nr6od",
        content_type: "player",
        image_path: "//images.elbotola.com/stats/players/vjxm8ghp03nr6od.png",
        absolute_url:
          "https://www.elbotola.com/analytics/player/vjxm8ghp03nr6od",
      },
      {
        name: "ريال مدريد",
        object_id: "e4wyrn4h111q86p",
        content_type: "team",
        image_path: "//images.elbotola.com/stats/logos/e4wyrn4h111q86p.png",
        absolute_url: "https://www.elbotola.com/analytics/team/e4wyrn4h111q86p",
      },
      {
        name: "مانشستر سيتي",
        object_id: "p4jwq2ghd57m0ve",
        content_type: "team",
        image_path: "//images.elbotola.com/stats/logos/p4jwq2ghd57m0ve.png",
        absolute_url: "https://www.elbotola.com/analytics/team/p4jwq2ghd57m0ve",
      },
      {
        name: "دوري أبطال أوروبا",
        object_id: "z8yomo4h7wq0j6l",
        content_type: "competition",
        image_path:
          "//images.elbotola.com/stats/competitions/z8yomo4h7wq0j6l.png",
        absolute_url:
          "https://www.elbotola.com/analytics/competition/z8yomo4h7wq0j6l",
      },
    ],
    content_type: "article",
    object_id: "66157c2092bd7587898e30a6",
    image: {
      default_path:
        "//images2.elbotola.com/article/66157c2092bd7587898e30a6_default.jpg",
      thumb_path:
        "//images2.elbotola.com/article/66157c2092bd7587898e30a6_thumb.jpg",
    },
    pub_date: 1712684100,
    is_important: false,
    id: "66157c2260bb1d65c7d20f4b",
    team_A_logo: null,
    team_B_logo: null,
    fs_A: null,
    fs_B: null,
    winner: null,
    with_highlight: false,
    team_A_name: null,
    team_B_name: null,
    competition_name: null,
    competition_id: null,
    has_copyright: true,
    lang: "ar",
  },
  {
    title:
      'نوليتو: "لو كنت مكان العم لابورتا لأحضرت حقيبة من المال اللازم للتعاقد مع براهيم دياز"',
    absolute_url: "https://www.elbotola.com/article/2024-04-09-12-37-93.html",
    tags: [
      {
        name: "براهيم دياز",
        object_id: "vjxm8ghp03nr6od",
        content_type: "player",
        image_path: "//images.elbotola.com/stats/players/vjxm8ghp03nr6od.png",
        absolute_url:
          "https://www.elbotola.com/analytics/player/vjxm8ghp03nr6od",
      },
      {
        name: "برشلونة",
        object_id: "e4wyrn4h127q86p",
        content_type: "team",
        image_path: "//images.elbotola.com/stats/logos/e4wyrn4h127q86p.png",
        absolute_url: "https://www.elbotola.com/analytics/team/e4wyrn4h127q86p",
      },
      {
        name: "ريال مدريد",
        object_id: "e4wyrn4h111q86p",
        content_type: "team",
        image_path: "//images.elbotola.com/stats/logos/e4wyrn4h111q86p.png",
        absolute_url: "https://www.elbotola.com/analytics/team/e4wyrn4h111q86p",
      },
      {
        name: "الدوري الإسباني (لاليغا - إي أيه سبورتس)",
        object_id: "vl7oqdehlyr510j",
        content_type: "competition",
        image_path:
          "//images.elbotola.com/stats/competitions/vl7oqdehlyr510j.png",
        absolute_url:
          "https://www.elbotola.com/analytics/competition/vl7oqdehlyr510j",
      },
    ],
    content_type: "article",
    object_id: "6615368cc9f8015afc901687",
    image: {
      default_path:
        "//images2.elbotola.com/article/6615368cc9f8015afc901687_default.jpg",
      thumb_path:
        "//images2.elbotola.com/article/6615368cc9f8015afc901687_thumb.jpg",
    },
    pub_date: 1712667133,
    is_important: true,
    id: "6615385e60bb1d65c7be2c3d",
    team_A_logo: null,
    team_B_logo: null,
    fs_A: null,
    fs_B: null,
    winner: null,
    with_highlight: false,
    team_A_name: null,
    team_B_name: null,
    competition_name: null,
    competition_id: null,
    has_copyright: true,
    lang: "ar",
  },
  {
    title:
      'رودريغو عن هدفيه ضد السيتي عام 2022: "لقد غيَّرا كل شيء وبسببهما لم أعد حراً في الملعب"',
    absolute_url: "https://www.elbotola.com/article/2024-04-08-20-41-79.html",
    tags: [
      {
        name: "رودريجو",
        object_id: "x7lm7ph55lom2wd",
        content_type: "player",
        image_path: "//images.elbotola.com/stats/players/x7lm7ph55lom2wd.png",
        absolute_url:
          "https://www.elbotola.com/analytics/player/x7lm7ph55lom2wd",
      },
      {
        name: "ريال مدريد",
        object_id: "e4wyrn4h111q86p",
        content_type: "team",
        image_path: "//images.elbotola.com/stats/logos/e4wyrn4h111q86p.png",
        absolute_url: "https://www.elbotola.com/analytics/team/e4wyrn4h111q86p",
      },
      {
        name: "مانشستر سيتي",
        object_id: "p4jwq2ghd57m0ve",
        content_type: "team",
        image_path: "//images.elbotola.com/stats/logos/p4jwq2ghd57m0ve.png",
        absolute_url: "https://www.elbotola.com/analytics/team/p4jwq2ghd57m0ve",
      },
      {
        name: "دوري أبطال أوروبا",
        object_id: "z8yomo4h7wq0j6l",
        content_type: "competition",
        image_path:
          "//images.elbotola.com/stats/competitions/z8yomo4h7wq0j6l.png",
        absolute_url:
          "https://www.elbotola.com/analytics/competition/z8yomo4h7wq0j6l",
      },
      {
        name: "الدوري الإسباني (لاليغا - إي أيه سبورتس)",
        object_id: "vl7oqdehlyr510j",
        content_type: "competition",
        image_path:
          "//images.elbotola.com/stats/competitions/vl7oqdehlyr510j.png",
        absolute_url:
          "https://www.elbotola.com/analytics/competition/vl7oqdehlyr510j",
      },
    ],
    content_type: "article",
    object_id: "66145676a770d88e24eb8deb",
    image: {
      default_path:
        "//images2.elbotola.com/article/66145676a770d88e24eb8deb_default.jpg?571",
      thumb_path:
        "//images2.elbotola.com/article/66145676a770d88e24eb8deb_thumb.jpg?466",
    },
    pub_date: 1712617200,
    is_important: false,
    id: "6614772e60bb1d65c76861f1",
    team_A_logo: null,
    team_B_logo: null,
    fs_A: null,
    fs_B: null,
    winner: null,
    with_highlight: false,
    team_A_name: null,
    team_B_name: null,
    competition_name: null,
    competition_id: null,
    has_copyright: true,
    lang: "ar",
  },
  {
    title:
      'غوارديولا: "الفوز على ريال مدريد مرتين على التوالي أمر مستحيل عمليا"',
    absolute_url: "https://www.elbotola.com/article/2024-04-08-20-16-538.html",
    tags: [
      {
        name: "مانشستر سيتي",
        object_id: "p4jwq2ghd57m0ve",
        content_type: "team",
        image_path: "//images.elbotola.com/stats/logos/p4jwq2ghd57m0ve.png",
        absolute_url: "https://www.elbotola.com/analytics/team/p4jwq2ghd57m0ve",
      },
      {
        name: "دوري أبطال أوروبا",
        object_id: "z8yomo4h7wq0j6l",
        content_type: "competition",
        image_path:
          "//images.elbotola.com/stats/competitions/z8yomo4h7wq0j6l.png",
        absolute_url:
          "https://www.elbotola.com/analytics/competition/z8yomo4h7wq0j6l",
      },
      {
        name: "ريال مدريد",
        object_id: "e4wyrn4h111q86p",
        content_type: "team",
        image_path: "//images.elbotola.com/stats/logos/e4wyrn4h111q86p.png",
        absolute_url: "https://www.elbotola.com/analytics/team/e4wyrn4h111q86p",
      },
      {
        name: "Pep Guardiola",
        object_id: "9dn1m1ghennmoep",
        content_type: "player",
        image_path: "//images.elbotola.com/stats/players/9dn1m1ghennmoep.png",
        absolute_url:
          "https://www.elbotola.com/analytics/player/9dn1m1ghennmoep",
      },
    ],
    content_type: "article",
    object_id: "661450b8eed04ba698291502",
    image: {
      default_path:
        "//images2.elbotola.com/article/661450b8eed04ba698291502_default.jpg",
      thumb_path:
        "//images2.elbotola.com/article/661450b8eed04ba698291502_thumb.jpg",
    },
    pub_date: 1712607300,
    is_important: true,
    id: "6614513f60bb1d65c758e1e3",
    team_A_logo: null,
    team_B_logo: null,
    fs_A: null,
    fs_B: null,
    winner: null,
    with_highlight: false,
    team_A_name: null,
    team_B_name: null,
    competition_name: null,
    competition_id: null,
    has_copyright: true,
    lang: "ar",
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
