import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import "./styling/ComingSoonSpinner.css";

const FedericoPage = () => {
  return (
    <div>
      <NavBar />
      <main>
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-5xl">Federico Resume Page</h1>
          <p className="">Coming soon...</p>
          <span className="loader"></span>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FedericoPage;
