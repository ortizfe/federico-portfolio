// import { useRouteError } from "react-router";

import PageContent from "./PageContent";

const ErrorPage = () => {
  let title = "Oops! Something went wrong";
  let message = "Could not find the page you were looking for.";

  // if (error.status === 500) {
  //   message = error.data.message;
  // }

  // if (error.status === 404) {
  //   title = "Not found";
  //   message = "Could not find resource or page.";
  // }

  return (
    <div>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </div>
  );
};

export default ErrorPage;
