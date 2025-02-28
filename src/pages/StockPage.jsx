import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import "./styling/ComingSoonSpinner.css";

const StockPage = () => {
  return (
    <div>
      <NavBar />
      <div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl">Stocks API Page</h1>
          <p className="">Coming soon...</p>
          <span className="loader"></span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StockPage;
