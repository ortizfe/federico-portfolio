import PropTypes from "prop-types";

PageContent.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};

const PageContent = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default PageContent;
