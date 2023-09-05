import axios from "axios";

const newsApi = axios.create({ baseURL: "https://news-ynvj.onrender.com/api" });

export const getArticles = (topicQuery, sortByQuery, orderQuery) => {
  const queries = [];
  if (topicQuery) {
    queries.push({ topic: topicQuery });
  }
  if (sortByQuery) {
    queries.push({ sort_by: sortByQuery });
  }
  if (orderQuery) {
    queries.push({ order: orderQuery });
  }
  let baseApiArticleString = "/articles";
  if (queries.length === 3) {
    baseApiArticleString += `?topic=${topicQuery}&sort_by=${sortByQuery}&order=${orderQuery}`;
  } else if (queries.length === 2) {
    const firstKey = Object.keys(queries[0])[0];
    const secondKey = Object.keys(queries[1])[0];
    baseApiArticleString += `?${firstKey}=${queries[0][firstKey]}&${secondKey}=${queries[1][secondKey]}`;
  } else if (queries.length === 1) {
    if (topicQuery) {
      baseApiArticleString += `?topic=${topicQuery}`;
    }
    if (sortByQuery) {
      baseApiArticleString += `?sort_by=${sortByQuery}`;
    }
    if (orderQuery) {
      baseApiArticleString += `?order=${orderQuery}`;
    }
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
