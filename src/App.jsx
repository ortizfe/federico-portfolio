import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import ListCard from "./components/ui/ListCard";
import { motion } from "motion/react";

const apiTable = [
  {
    name: "Spotify Web API",
    description: "Retrieve metadata from Spotify content or control playback",
    link: "https://developer.spotify.com/documentation/web-api",
  },
  {
    name: "The Movie Database API",
    description:
      "Retrieve movie, TV show or actor images and/or data in your application",
    link: "https://developer.themoviedb.org/docs/getting-started",
  },
  // {
  //   name: "MarketStack API",
  //   description:
  //     "API to retrieve real-time, intraday and historical stock market data",
  //   link: "https://marketstack.com/documentation_v2",
  // },
];

function App() {
  return (
    <div>
      <NavBar />
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-7xl">Welcome</h1>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl text-gray-200">
              This web application serves as a portfolio to showcase my skillset
              as a Full-Stack Developer
            </h3>
            <p className="text-sm text-gray-400">
              This web application was built using React, with React Router v7
              for routing, Express and Node.js for a backend REST Api. You can
              find my resume under portfolios.
            </p>
          </motion.div>
          <div className="p-10">
            <p>
              This web application utilizes three site API&apos;s including the
              following:
            </p>
            <div className="pt-5">
              <div className="flex flex-wrap items-center justify-center gap-10">
                {apiTable.map((api) => (
                  <motion.div
                    key={api.name}
                    className="gap-10"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ListCard props={api} />
                    <br />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
