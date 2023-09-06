import { useSearchParams } from "react-router-dom";
import ArticleList from "../ArticleList";

const Articles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");
  const formatTopicQuery = (topicQuery) => {
    return topicQuery[0].toUpperCase() + topicQuery.slice(1);
  };
  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");

  const changeOrder = (orderQuery) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", orderQuery);
    setSearchParams(newParams);
  };

  const changeSortBy = (sort) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", sort);
    setSearchParams(newParams);
  };

  return (
    <section>
      <h2>{topicQuery ? formatTopicQuery(topicQuery) : "All Articles:"}</h2>
      <label>
        Sort by:
        <select
          onChange={(event) => {
            changeSortBy(event.target.value);
          }}
          defaultValue={sortByQuery ? sortByQuery : "created_at"}
        >
          <option value="created_at">Date created</option>
          <option value="title">Title</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Number of Comments</option>
        </select>
      </label>
      <label>
        Order:
        <select
          onChange={(event) => {
            changeOrder(event.target.value);
          }}
          defaultValue={orderQuery ? orderQuery : "desc"}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
      <ArticleList
        topic={topicQuery}
        sort_by={sortByQuery}
        order={orderQuery}
      />
    </section>
  );
};

export default Articles;
