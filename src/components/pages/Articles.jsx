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

  const changeSortAndOrder = (value) => {
    switch (value) {
      case "titleASC":
        setSearchParams({ sort_by: "title", order: "asc", topic: topicQuery });
        break;
      case "titleDESC":
        setSearchParams({ sort_by: "title", order: "desc", topic: topicQuery });
        break;
      case "votesASC":
        setSearchParams({ sort_by: "votes", order: "asc", topic: topicQuery });
        break;
      case "votesDESC":
        setSearchParams({ sort_by: "votes", order: "desc", topic: topicQuery });
        break;
      case "dateASC":
        setSearchParams({
          sort_by: "created_at",
          order: "asc",
          topic: topicQuery,
        });
        break;
      case "dateDESC":
        setSearchParams({
          sort_by: "created_at",
          order: "desc",
          topic: topicQuery,
        });
        break;
      case "commentsASC":
        setSearchParams({ sort_by: "comment_count", order: "asc" });
        break;
      case "commentsDESC":
        setSearchParams({ sort_by: "comment_count", order: "desc" });
        break;
    }
  };

  return (
    <section>
      <h2>{topicQuery ? formatTopicQuery(topicQuery) : "All Articles:"}</h2>
      <select
        onChange={(event) => {
          changeSortAndOrder(event.target.value);
        }}
      >
        <option value={"titleASC"}>Title (a-z)</option>
        <option value={"titleDESC"}>Title (z-a)</option>
        <option value={"votesASC"}>Votes (ascending)</option>
        <option value={"votesDESC"}>Votes (descending)</option>
        <option value={"dateASC"}>Date created (newest first)</option>
        <option value={"dateDESC"}>Date created (oldest first)</option>
        <option value={"commentsASC"}>Number of comments (ascending)</option>
        <option value={"commentsDESC"}>Number of comments (descending)</option>
      </select>
      <ArticleList
        topicQuery={topicQuery}
        sortByQuery={sortByQuery}
        orderQuery={orderQuery}
      />
    </section>
  );
};

export default Articles;
