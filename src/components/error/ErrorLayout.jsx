import NavBar from "../navbar/NavBar";
import { Outlet } from "react-router";

const ErrorLayout = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ErrorLayout;
