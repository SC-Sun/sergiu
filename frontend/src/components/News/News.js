import React from "react";
import "./News.css";
import { useSelector } from "react-redux";

const News = () => {
  const { news, error } = useSelector((state) => state.news);

  return (
    <div className="news-container">
      {news?.map((u) => {
        return (
          <div key={u.id}>
            <h3>{u.theme}</h3>
            <p>{u.text}</p>
            <a href={u.info} target="_blank" rel="noopener noreferrer">
              info____
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default News;
