// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import SpotifyPage from "./pages/SpotifyPage.jsx";
import MoviePage from "./pages/MoviePage.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/spotify" element={<SpotifyPage />}>
        {/*<Route path="/personal" />
        <Route path="/artists" />
        <Route path="/albums" />*/}
      </Route>
      <Route path="/tmdb" element={<MoviePage />} />
    </Routes>
  </BrowserRouter>
);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
