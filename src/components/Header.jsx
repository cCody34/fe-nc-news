import { useContext } from "react";
import { UserContext } from "./contexts/User";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <section className="header">
      <h1>Header here</h1>
      {user.username ? (
        <p>Logged in as:{user.name}</p>
      ) : (
        <Link to="/log-in">
          <button>Log-in here</button>
        </Link>
      )}
    </section>
  );
};

export default Header;
