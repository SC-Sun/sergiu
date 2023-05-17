import React, { useEffect } from "react";
import "./Tours.css";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../Tours/redux/action";

const Tours = () => {
  const { tours, error } = useSelector((state) => state.tours);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.getTours());
  }, []);
  return (
    <div className="tours-container">
      <ul>
        {tours?.map((t, index) => {
          return (
            <li key={index} >
              <h2>{t.name}</h2>
              <p>{t.date}</p>
              <a href={t.info} target="_blank" rel="noopener noreferrer">
                <span>I</span>
                <span>n</span>
                <span>f</span>
                <span className="move">o</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tours;
