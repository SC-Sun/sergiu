import axios from "axios";

const getNews = async () => {
  const newsUrl = "http://localhost:5000/news";
  return await axios.get(`${newsUrl}`);
};

export default getNews;
