import { useSearchParams } from "react-router-dom";
import ArticleList from "../ArticleList";

const Articles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");
  const sortByQuery = searchParams.get("sort_by");
  console.log(sortByQuery);
  return (
    <section>
      <h2>All Articles:</h2>
      <ArticleList topicQuery={topicQuery} sortByQuery={sortByQuery} />
    </section>
  );
};

export default Articles;
