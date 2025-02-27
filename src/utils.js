import { CircleUser } from "lucide-react";

// Navbar data
export const NavbarItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Spotify",
    href: "/spotify",
  },
  {
    name: "Movies",
    href: "/tmdb",
  },
  {
    name: "Stocks",
    href: "/stocks",
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
