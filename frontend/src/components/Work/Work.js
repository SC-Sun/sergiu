import React from "react";
import "./Work.css";
import { useSelector } from "react-redux";

const Work = () => {
  const { work, error } = useSelector((state) => state.work);

  return (
    <div className="work-container">
      {work.map((m) => {
        return (
          <div key={m.id}>
            <h3>{m.name}</h3>
            <p>{m.about}</p>
            <img src={m.media.photo} alt={m.name} />
            <a href={m.media.link} target="_blank" rel="noopener noreferrer">
              info____
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
