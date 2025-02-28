import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import { Card, CardBody, CardHeader, Divider, Link } from "@heroui/react";
import { motion } from "motion/react";

const apiTable = [
  {
    name: "Spotify Web API",
    description: "Retrieve metadata from Spotify content or control playback",
    link: "https://developer.spotify.com/documentation/web-api",
  },
  {
    name: "The Movie Database (TMDB) API",
    description:
      "Retrieve movie, TV show or actor images and/or data in your application",
    link: "https://developer.themoviedb.org/docs/getting-started",
  },
  {
    name: "MarketStack API",
    description:
      "API to retrieve real-time, intraday and historical stock market data",
    link: "https://marketstack.com/documentation_v2",
  },
];

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <div className="flex flex-col gap-6">
          <h1 className="text-7xl">Welcome</h1>
          <h3 className="text-2xl text-gray-200">
            This web application serves as a portfolio to showcase my skillset
            as a Full-Stack Developer
          </h3>
          <p className="text-sm text-gray-400">
            This web application was built using React, with React Router v7 for
            routing, Express and Node.js for a backend REST Api. You can find my
            resume under portfolios.
          </p>
          <div className="p-10">
            <p>
              This web application utilizes three site API&apos;s including the
              following:
            </p>
            <div className="p-5">
              <ul>
                {apiTable.map((api) => (
                  <motion.li
                    key={api.name}
                    className="flex h-full flex-col"
                    initial={{
                      opacity: 0,
                      x: -100,
                      y: 100,
                    }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Card className="h-full w-full rounded-xl bg-gradient-to-br from-amber-200 to-lime-200 p-2">
                      <CardHeader className="items-center justify-center text-2xl leading-none font-semibold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
                        <div className="flex flex-col">
                          <p className="text-md">{api.name}</p>
                        </div>
                      </CardHeader>
                      <Divider />
                      <CardBody className="flex flex-col items-center justify-center gap-2 py-1">
                        <p className="text-lg text-gray-800">
                          {api.description}
                        </p>
                        <Link
                          isExternal
                          showAnchorIcon
                          href={api.link}
                          className="text-blue-800 hover:scale-102 hover:text-gray-700"
                        >
                          Visit the {api.name} webpage
                        </Link>
                      </CardBody>
                    </Card>
                    <br />
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
