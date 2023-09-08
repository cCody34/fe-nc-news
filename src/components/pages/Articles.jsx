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
    <section className="articles">
      <h2>{topicQuery ? formatTopicQuery(topicQuery) : "All Articles:"}</h2>
      <section className="articles-sort-and-order">
        <label className="articles-sort-by">
          Sort by:
          <select
            className="sort-drop-down"
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
        <label className="articles-order">
          Order:
          <select
            className="order-drop-down"
            onChange={(event) => {
              changeOrder(event.target.value);
            }}
            defaultValue={orderQuery ? orderQuery : "desc"}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </section>
      <ArticleList
        topic={topicQuery}
        sort_by={sortByQuery}
        order={orderQuery}
      />
    </section>
  );
};

export default Articles;
