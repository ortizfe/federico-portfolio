import PropTypes from "prop-types";
import NavBar from "./navbar/NavBar";
import { Frown } from "lucide-react";

const PageContent = ({ title, children }) => {
  const error = 404;

  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center gap-4 pt-10">
        <Frown className="size-30" />
        <h1 className="text-6xl">{error}</h1>
        <h1 className="text-3xl">{title}</h1>
        <div className="text-md text-gray-400">{children}</div>
      </div>
    </div>
  );
};

export default PageContent;

PageContent.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};
