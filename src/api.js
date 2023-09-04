import axios from "axios";

const api = "https://news-ynvj.onrender.com/api";

export const getArticles = () => {
  return axios.get(`${api}/articles`);
};
