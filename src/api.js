import axios from "axios";

const newsApi = axios.create({ baseURL: "https://news-ynvj.onrender.com/api" });

export const getArticles = (topicQuery) => {
  if (topicQuery) {
    return newsApi.get(`/articles?topic=${topicQuery}`);
  } else {
    return newsApi.get("/articles");
  }
};

export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`);
};

export const getComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`);
};

export const patchArticleVotes = (article_id, increment) => {
  return newsApi.patch(`/articles/${article_id}`, { inc_votes: increment });
};

export const postComment = (article_id, username, body) => {
  return newsApi.post(`/articles/${article_id}/comments`, { username, body });
};
