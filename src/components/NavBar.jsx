import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <section className="nav-bar">
      <h2>Menu</h2>
      <h3>View articles by topic:</h3>
      <Link to="/articles?topic=cooking">
        <button>Cooking</button>
      </Link>
      <Link to="/articles?topic=coding">
        <button>Coding</button>
      </Link>
      <Link to="/articles?topic=football">
        <button>Football</button>
      </Link>
      <Link to="/articles">
        <button>All Articles</button>
      </Link>
    </section>
  );
};

export default NavBar;
