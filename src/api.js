import axios from "axios";

const newsApi = axios.create({ baseURL: "https://news-ynvj.onrender.com/api" });

export const getArticles = (topicQuery, sortByQuery, orderQuery) => {
  return newsApi.get("/articles", {
    params: { topic: topicQuery, sort_by: sortByQuery, order: orderQuery },
  });
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
