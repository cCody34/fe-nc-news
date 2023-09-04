const ArticleCard = ({ article }) => {
  console.log(article);
  const { title, topic, article_img_url, votes, comment_count } = article;

  return (
    <section className="article-card">
      <section className="votes-on-article-card">
        <button>⬆</button>
        <p>votes</p>
        <button>⬇</button>
      </section>
      <section className="main-article-card">
        <h3>{title}</h3>
        <img src={`${article_img_url}`}></img>
        <p>Comments: {comment_count}</p>
        <p>Topic: {topic}</p>
      </section>
    </section>
  );
};

export default ArticleCard;
