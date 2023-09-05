import { useSearchParams } from "react-router-dom";
import ArticleList from "../ArticleList";

const Articles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const formatTopicQuery = (topic) => {
    return topic[0].toUpperCase() + topic.slice(1);
  };
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");

  const changeOrder = (order) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", order);
    setSearchParams(newParams);
  };

  const changeSortBy = (sort) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", sort);
    setSearchParams(newParams);
  };

  return (
    <section>
      <h2>{topic ? formatTopicQuery(topic) : "All Articles:"}</h2>
      <label>
        Sort by:
        <select
          onChange={(event) => {
            changeSortBy(event.target.value);
          }}
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
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
      <ArticleList topic={topic} sort_by={sort_by} order={order} />
    </section>
  );
};

export default Articles;
