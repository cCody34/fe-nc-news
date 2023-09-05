import { useSearchParams } from "react-router-dom";
import ArticleList from "../ArticleList";

const Articles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");
  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");
  console.log(sortByQuery, "<< SORT BY");
  return (
    <section>
      <h2>All Articles:</h2>
      <ArticleList
        topicQuery={topicQuery}
        sortByQuery={sortByQuery}
        orderQuery={orderQuery}
      />
    </section>
  );
};

export default Articles;
