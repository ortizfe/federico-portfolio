import { useState } from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import { motion } from "motion/react";
import MoviesCard from "../components/tmdb/MoviesCard";
import TVCard from "../components/tmdb/TVCard";
import GradientSelectorButton from "../components/tmdb/GradientSelectorButton";

const MoviePage = () => {
  const [movie, setMovie] = useState(false);
  const [tv, setTv] = useState(false);

  const movieClick = () => {
    setMovie(true);
    setTv(false);
  };

  const tvClick = () => {
    setTv(true);
    setMovie(false);
  };

  return (
    <div>
      <NavBar />
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center justify-center gap-10">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            <h1 className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text py-3 text-4xl font-light text-transparent md:text-6xl">
              Welcome to the Movie Database API
            </h1>
            <p>
              Click on Movies or TV, then select a genre and we&apos;ll give you
              the 20 top most popular picks at the moment
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <div className="flex flex-wrap items-center justify-center gap-30">
                <GradientSelectorButton text="Movies" onClick={movieClick} />
                <GradientSelectorButton text="TV" onClick={tvClick} />
              </div>
            </div>
          </motion.div>
        </div>
        <div>
          {movie && <MoviesCard />}
          {tv && <TVCard />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MoviePage;
