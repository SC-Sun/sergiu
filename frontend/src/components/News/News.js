import React, { useEffect } from "react";
import "./News.css";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../News/redux/action";

const News = () => {
  const { news, error } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.getNewsStart());
  }, []);

  return (
    <div className="news-container">
      {news?.map((u, index) => {
        return (
          <div key={index}>
            <h2>{u.theme}</h2>
            <p>{u.text}</p>
            <a href={u.info} target="_blank" rel="noopener noreferrer">
              <span>I</span>
              <span>n</span>
              <span>f</span>
              <span className="move">o</span>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default News;
