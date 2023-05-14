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
            <h2>{u.theme}</h2>
            <p>{u.text}</p>
            <a href={u.info} target="_blank" rel="noopener noreferrer">
              <span>I</span>
              <span>n</span>
              <span>f</span>
              <span classname="move">o</span>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default News;
