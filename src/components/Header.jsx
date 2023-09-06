import { useContext } from "react";
import { UserContext } from "./contexts/User";

const Header = () => {
  const {user} = useContext(UserContext);
  return (
    <section className="header">
      <h1>Header here</h1>
      <p>Logged in as: {user.name}</p>
    </section>
  );
};

export default Header;
