const ArticleCard = ({ article }) => {
  const { title, topic, article_img_url, votes, comment_count } = article;

  return (
    <section className="article-card">
      <section className="article-card-votes">
        <button>⬆</button>
        <p>votes</p>
        <button>⬇</button>
      </section>
      <h3 className="article-card-title">{title}</h3>
      <img className="article-card-img" src={`${article_img_url}`}></img>
      <section className="article-card-info">
        <p className="article-card-comment-count">Comments: {comment_count}</p>
        <p className="article-card-topic">Topic: {topic}</p>
      </section>
    </section>
  );
};

export default ArticleCard;
