import React from "react";
import "./Tours.css";
 

const tour = [
  {
    id: "1",
    name: "hopeless",
    date: "13.07.2024",
    info: "https://www.google.com/",
  },
  {
    id: "2",
    name: "hopeless2",
    date: "13.07.2024",
    info: "https://www.google.com/",
  },
  {
    id: "3",
    name: "hopeles3",
    date: "13.07.2024",
    info: "https://www.google.com/",
  },
];

const Tours = () => {
  return (
    <div className="tours-container">
      <ul>
        {tour.map((t) => {
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
