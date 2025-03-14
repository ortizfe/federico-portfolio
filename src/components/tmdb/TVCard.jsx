import { tv_genres } from "./genres";
import { useState } from "react";
import LoadingSpinner from "../ui/LoadingSpinner";
import MoviesTVCard from "./ui/MoviesTVCard";

const TVCard = () => {
  const [tvGenre, setTVGenre] = useState("");
  const [discoverTV, setDiscoverTV] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [genreTitle, setGenreTitle] = useState("");

  const searchTVByGenre = async (genreId) => {
    let tvResponse = "";
    setIsLoading(true);

    const timeout = 10000;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(
        `https://express-backend-api-one.vercel.app/tmdb/tv?input=${genreId}`,
        {
          method: "GET",
          signal: controller.signal,
        }
      );

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      clearTimeout(id);
      tvResponse = await response.json();
    } catch (error) {
      console.log(`Error message: ${error}`);
    }

    setDiscoverTV(tvResponse.results);
    setIsLoading(false);
  };

  const onSelectGenre = (e) => {
    setTVGenre(e.target.value);

    searchTVByGenre(e.target.value);
    // setGenreTitle(movie_genres[e.target.value]);
    tv_genres.map((item) => {
      if (item.id === parseInt(e.target.value)) {
        setGenreTitle(item.name);
      }
    });
  };

  const pickNewGenre = () => {
    setDiscoverTV([]);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center md:flex-nowrap">
      {discoverTV.length === 0 && (
        <label>
          Select a movie genre:&nbsp;&nbsp;
          <select
            onChange={onSelectGenre}
            value={tvGenre}
            className="max-w-xs cursor-pointer items-center rounded-xl border-2 border-black bg-white p-2 text-black focus:outline-none"
          >
            <option value="" disabled>
              Select here
            </option>
            {tv_genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </label>
      )}
      {isLoading && <LoadingSpinner />}
      {discoverTV.length > 0 && (
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-2xl font-bold underline">
            Top&nbsp; {genreTitle}&nbsp; TV Shows
          </h1>
          <MoviesTVCard discoverList={discoverTV} movieOrTv={"tv"} />
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

export default TVCard;
