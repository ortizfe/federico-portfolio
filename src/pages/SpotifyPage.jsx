import SpotifyTabs from "../components/spotify/SpotifyTabs";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import { motion } from "motion/react";

const SpotifyPage = () => {
  return (
    <>
      <NavBar />
      <div>
        <div className="flex flex-col items-center justify-center gap-4">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="bg-gradient-to-r from-[rgba(10,208,32)] to-[rgba(11,120,94)] bg-clip-text py-3 text-4xl font-light text-transparent md:text-6xl">
              Welcome to the Spotify API
            </h1>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              Login to your personal spotify, search for your favorite artists
              and songs, or browse your favorite albums
            </p>
          </motion.div>
        </div>
        <div className="pt-10">
          <SpotifyTabs />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SpotifyPage;
