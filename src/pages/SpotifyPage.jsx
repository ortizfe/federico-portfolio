import SpotifyTabs from "../components/spotify/SpotifyTabs";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import { motion } from "motion/react";

import styles from "../components/spotify/Spotify.module.css";

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
              {"Welcome to the Spotify API".split("").map((char, idx) => (
                <span key={idx} className={styles.hoverText}>
                  {char}
                </span>
              ))}
            </h1>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>Search for your favorite artists and albums</p>
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
