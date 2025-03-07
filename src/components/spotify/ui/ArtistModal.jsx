import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import PropTypes from "prop-types";
import LoadingSpinner from "../../ui/LoadingSpinner";

const ArtistModal = ({ id, src, isOpen, setIsOpen }) => {
  const [artistInfo, setArtistInfo] = useState(null);

  const spotify_baseurl = "https://express-backend-api-one.vercel.app/";
  // const spotify_testurl = "http://localhost:3000/";

  useEffect(() => {
    if (isOpen === true) {
      const getArtistInfo = async () => {
        let artistInfoResponse = [];

        const timeout = 10000;
        const controller = new AbortController();
        const timerId = setTimeout(() => controller.abort(), timeout);

        try {
          const response = await fetch(
            `${spotify_baseurl}spotify/artist?input=${id}`,
            {
              method: "GET",
              signal: controller.signal,
            }
          );

          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }

          clearTimeout(timerId);
          artistInfoResponse = await response.json();
          setArtistInfo(artistInfoResponse);
        } catch (error) {
          console.error(error.message);
        }
      };

      getArtistInfo();
    }
  }, [id, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg cursor-default overflow-hidden rounded-lg bg-black/60 p-6 text-white shadow-xl"
          >
            <div className="relative z-10">
              {artistInfo ? (
                <div className="flex flex-col items-center justify-center gap-4">
                  <img className="w-[100px] md:w-[200px]" src={src} />
                  <div className="flex flex-col">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={artistInfo.external_urls.spotify}
                      className="group relative cursor-pointer px-4 py-2 font-medium text-white transition-colors duration-[400ms] hover:text-indigo-300"
                    >
                      <h1 className="text-4xl font-bold uppercase">
                        {artistInfo.name}
                      </h1>
                      {/* TOP */}
                      <span className="absolute top-0 left-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

                      {/* RIGHT */}
                      <span className="absolute top-0 right-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

                      {/* BOTTOM */}
                      <span className="absolute right-0 bottom-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

                      {/* LEFT */}
                      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
                    </a>
                    {artistInfo.genres && (
                      <p className="text-md text-white/80">
                        {artistInfo.genres.join(",")}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <LoadingSpinner />
              )}
              <div className="flex justify-center pt-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-indingo-600 w-auto cursor-pointer rounded-full bg-white px-10 py-1 font-semibold text-black transition-colors hover:scale-105 hover:bg-white/80"
                >
                  Back
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ArtistModal;

ArtistModal.propTypes = {
  id: PropTypes.string,
  src: PropTypes.string,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
