import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SpotifyAlbums from "./SpotifyAlbums";
import SpotifyLogin from "./SpotifyLogin";
import SpotifyArtist from "./SpotifyArtist";

import styles from "./SpotifyTabs.module.css";

const tabs = [
  // {
  //   name: "login",
  //   label: "Login",
  //   render: () => {
  //     return <SpotifyLogin />;
  //   },
  // },
  // {
  //   name: "myspotify",
  //   label: "My Spotify",
  //   render: () => {
  //     return <SpotifyLogin />;
  //   },
  // },
  {
    name: "artists",
    label: "Artists",
    render: () => {
      return <SpotifyArtist />;
    },
  },
  {
    name: "albums",
    label: "Albums",
    render: () => {
      return <SpotifyAlbums />;
    },
  },
];

const tabContentVariants = {
  initial: {
    y: 10,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -10,
    opacity: 0,
  },
};

const SpotifyTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleClick = (e, tab) => {
    e.preventDefault();

    setActiveTab(tab);
  };

  const isSelected = (tab) => activeTab.name === tab.name;

  return (
    <div
      className={`flex flex-col items-center justify-center gap-10 ${styles.tabWrapper}`}
    >
      <div className={styles.tabHeader}>
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={[
              styles.tabItem,
              isSelected(tab) ? styles.selected : "",
            ].join(" ")}
          >
            <a href="#" onClick={(e) => handleClick(e, tab)}>
              {tab.label}
            </a>

            {isSelected(tab) && (
              <motion.div layoutId="indicator" className={styles.indicator} />
            )}
          </div>
        ))}
      </div>

      <div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.name || "empty"}
            variants={tabContentVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{
              duration: 0.3,
            }}
          >
            {tabs[activeTab.name]}
            {activeTab && activeTab?.render()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SpotifyTabs;
