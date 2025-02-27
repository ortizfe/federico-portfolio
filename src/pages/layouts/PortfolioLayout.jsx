import { Outlet } from "react-router";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";

const PortfolioLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PortfolioLayout;
