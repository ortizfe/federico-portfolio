import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";

const SpotifyPage = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="bg-gradient-to-r from-[rgba(10,208,32)] to-[rgba(11,120,94)] bg-clip-text text-transparent text-4xl font-light md:text-6xl">
          Welcome to the Spotify API
        </h1>
        <p>
          Login to your personal spotify, search for your favorite artists, or
          browse your favorite albums
        </p>
      </div>
      <Footer />
    </>
  );
};

export default SpotifyPage;
