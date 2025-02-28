// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";

import App from "./App.jsx";
import SpotifyPage from "./pages/SpotifyPage.jsx";
import MoviePage from "./pages/MoviePage.jsx";
import PortfolioLayout from "./pages/layouts/PortfolioLayout.jsx";
import FedericoPage from "./pages/FedericoPage.jsx";
import FaresPage from "./pages/FaresPage.jsx";
import StockPage from "./pages/StockPage.jsx";
import ErrorPage from "./components/Error.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/spotify" element={<SpotifyPage />} />
      <Route path="/tmdb" element={<MoviePage />} />
      <Route element={<PortfolioLayout />}>
        <Route path="/portfolios/federico" element={<FedericoPage />} />
        <Route path="/portfolios/fares" element={<FaresPage />} />
      </Route>
      <Route path="/stocks" element={<StockPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
