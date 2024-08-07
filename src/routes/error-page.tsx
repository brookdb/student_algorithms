//The error page (error-page.tsx)
import { Link, useRouteError } from "react-router-dom";
import App from "../App";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="container-fluid text-center p-5">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to={"/"}>Click here to return to main page</Link>
    </div>
  );
}
