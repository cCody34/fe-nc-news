import axios from "axios";

const newsApi = axios.create({ baseURL: "https://news-ynvj.onrender.com/api" });

export const getArticles = (topicQuery, sortByQuery) => {
  let baseApiArticleString = "/articles";
  if (topicQuery && sortByQuery) {
    baseApiArticleString += `?topic=${topicQuery}&sort_by=${sortByQuery}`;
  } else if (sortByQuery) {
    baseApiArticleString += "?sort_by=" + sortByQuery;
  } else if (topicQuery) {
    baseApiArticleString += "?topic=" + topicQuery;
  }
  return newsApi.get(baseApiArticleString);
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
