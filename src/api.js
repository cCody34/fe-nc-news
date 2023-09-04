import axios from "axios";

const api = "https://news-ynvj.onrender.com/api";

export const getArticles = () => {
  return axios.get(`${api}/articles`);
};

// export const getArticleById = (article_id) => {
//   return axios.get(`${api}/articles/${article_id}`);
// };
