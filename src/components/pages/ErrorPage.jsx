import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h2>404: PAGE NOT FOUND</h2>
      <label>
        Double check that URL is correct or <Link to="/">click here</Link> to go
        to HomePage:{" "}
      </label>
    </>
  );
};

export default ErrorPage;
