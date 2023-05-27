import React, { useEffect } from "react";
import "./News.css";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../News/redux/action";
import MovingText from "../../helpers/movingText";
import tabTitle from "../../helpers/tabTitle";

const News = () => {
  const { news, error } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.getNewsStart());
  }, []);
  tabTitle("Sergiu Matis | News");
  return (
    <div className="news-container">
      {news?.map((u, index) => {
        return (
          <div key={index}>
            <h2>{u.theme}</h2>
            <p>{u.text}</p>
            <MovingText href={u.info} target="_blank" rel="noopener noreferrer">
              <span>I</span>
              <span>n</span>
              <span>f</span>
              <span className="move">o</span>
            </MovingText>
          </div>
        );
      })}
    </div>
  );
};

export default News;
