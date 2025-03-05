import { CircleUser, TrendingUp, AudioLines, Film } from "lucide-react";

// Navbar data
export const NavbarItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "APIs",
    subMenu: [
      {
        name: "Spotify",
        href: "/spotify",
        desc: "Spotify API",
        icon: AudioLines,
      },
      {
        name: "TMBD",
        href: "/tmdb",
        desc: "TMDB API",
        icon: Film,
      },
      {
        name: "Stocks",
        href: "/stocks",
        desc: "MarketStack API",
        icon: TrendingUp,
      },
    ],
    gridCols: 3,
  },
  {
    name: "Portfolios",
    subMenu: [
      {
        name: "Federico",
        href: "/portfolios/federico",
        desc: "Software Engineer",
        icon: CircleUser,
      },
      {
        name: "Fares",
        href: "/portfolios/fares",
        desc: "IT Support Lead",
        icon: CircleUser,
      },
    ],
    gridCols: 2,
  },
];
