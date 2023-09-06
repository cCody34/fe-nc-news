import axios from "axios";

const newsApi = axios.create({ baseURL: "https://news-ynvj.onrender.com/api" });

export const getArticles = (topic, sort_by, order) => {
  return newsApi.get("/articles", {
    params: { topic, sort_by, order },
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

export const getUsers = () => {
  return newsApi.get("users");
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`);
};
