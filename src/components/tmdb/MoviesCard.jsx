import { movie_genres } from "./genres";
import LoadingSpinner from "../ui/LoadingSpinner";
import { useState } from "react";
import MoviesTVCard from "./ui/MoviesTVCard";

const MoviesCard = () => {
  const [movieGenre, setMovieGenre] = useState("");
  const [discoverMovies, setDiscoverMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [genreTitle, setGenreTitle] = useState("");

  const searchMoviesByGenre = async (genreId) => {
    let movieResponse = "";
    setIsLoading(true);

    const timeout = 10000;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(
        `https://express-backend-api-one.vercel.app/tmdb/movies?input=${genreId}`,
        {
          method: "GET",
          signal: controller.signal,
        }
      );

      //   console.log(`${express_baseurl.dev}tmdb/movies?input=${genreId}`);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      clearTimeout(id);
      movieResponse = await response.json();
    } catch (error) {
      console.log(`Error message: ${error}`);
    }

    setDiscoverMovies(movieResponse.results);
    setIsLoading(false);
  };

  const onSelectGenre = (e) => {
    setMovieGenre(e.target.value);

    searchMoviesByGenre(e.target.value);
    // setGenreTitle(movie_genres[e.target.value]);
    movie_genres.map((item) => {
      if (item.id === parseInt(e.target.value)) {
        setGenreTitle(item.name);
      }
    });
  };

  const pickNewGenre = () => {
    setDiscoverMovies([]);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center md:flex-nowrap">
      {discoverMovies.length === 0 && (
        <label aria-label="Movie genres">
          Select a movie genre:&nbsp;&nbsp;
          <select
            onChange={onSelectGenre}
            value={movieGenre}
            className="max-w-xs cursor-pointer items-center rounded-xl border-2 border-black bg-white p-2 text-black focus:outline-none"
            aria-label="Genre selection"
          >
            <option value="" disabled aria-label="Disabled option">
              Select here
            </option>
            {movie_genres.map((genre) => (
              <option
                key={genre.id}
                value={genre.id}
                aria-label={`${genre.name}`}
              >
                {genre.name}
              </option>
            ))}
          </select>
        </label>
      )}
      {isLoading && <LoadingSpinner />}
      {discoverMovies.length > 0 && (
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-2xl font-bold underline">
            Top&nbsp; {genreTitle}&nbsp; Movies
          </h1>
          <MoviesTVCard discoverList={discoverMovies} movieOrTv={"movie"} />
          <button
            onClick={pickNewGenre}
            className="cursor-pointer rounded-full bg-white/90 p-2 text-black hover:scale-105 hover:bg-indigo-200/90"
            aria-label="Reset"
          >
            Search a new genre
          </button>
        </div>
      )}
    </div>
  );
};

export default MoviesCard;
