import { useSearchParams } from "react-router-dom";
import ArticleList from "../ArticleList";

const Articles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");
  return (
    <section>
      <h2>All Articles:</h2>
      <ArticleList topicQuery={topicQuery} />
    </section>
  );
};

export default Articles;
