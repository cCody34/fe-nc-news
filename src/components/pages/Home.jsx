import ArticleList from "../ArticleList";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <ArticleList limit={5} />
      <Link to="/articles" className="home-articles-link">
        <button>View all articles</button>
      </Link>
    </section>
  );
};

export default Home;
