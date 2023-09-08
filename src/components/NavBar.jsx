import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const NavBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");

  return (
    <section className="nav-bar">
      <h2>Menu</h2>
      <h3>View articles by topic:</h3>
      <Link to="/articles?topic=cooking">
        <button className={topicQuery === "cooking" ? "active-topic" : ""}>
          Cooking
        </button>
      </Link>
      <Link to="/articles?topic=coding">
        <button className={topicQuery === "coding" ? "active-topic" : ""}>
          Coding
        </button>
      </Link>
      <Link to="/articles?topic=football">
        <button className={topicQuery === "football" ? "active-topic" : ""}>
          Football
        </button>
      </Link>
      <Link to="/articles">
        <button className={!topicQuery ? "active-topic" : ""}>
          All Articles
        </button>
      </Link>
    </section>
  );
};

export default NavBar;
