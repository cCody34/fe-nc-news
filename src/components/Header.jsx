import { useContext } from "react";
import { UserContext } from "./contexts/User";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useContext(UserContext);

  const displayLoggedIn = (user) => {
    return (
      <section className="header-logged-in">
        <p className="header-logged-in-username">Logged in as: {user.name}</p>
        <img className="header-logged-in-avatar" src={user.avatar_url}></img>
        <Link to="/log-in">
          <button>Switch user</button>{" "}
        </Link>
      </section>
    );
  };

  return (
    <section className="header">
      <h1>Header here</h1>
      {user.username ? (
        displayLoggedIn(user)
      ) : (
        <Link to="/log-in">
          <button>Log-in here</button>
        </Link>
      )}
    </section>
  );
};

export default Header;
