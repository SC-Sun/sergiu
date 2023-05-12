import React from "react";
import "./Tours.css";
import { useSelector } from "react-redux";

const Tours = () => {
const { tours, error } = useSelector((state) => state.tours);
  return (
    <div className="tours-container">
      <ul>
        {tours?.map((t) => {
          return (
            <li key={t.id}>
              <h2>{t.name}</h2>
              <p>{t.date}</p>
              <a href={t.info} target="_blank"  rel="noopener noreferrer"> info____</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tours;
