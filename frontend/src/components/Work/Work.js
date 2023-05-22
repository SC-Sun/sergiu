import React from "react";
import "./Work.css";
import { useSelector } from "react-redux";

const Work = () => {
  const { work, error } = useSelector((state) => state.work);

  return (
    <div className="work-container">
      {work.map((m) => {
        return (
          <div className="work-div" key={m.id}>
            <h2>{m.name}</h2>
            <p>{m.about}</p>
            <img src={m.media.photo} alt={m.name} />
            <br />
            <a href={m.media.link} target="_blank" rel="noopener noreferrer">
              <span>I</span>
              <span>n</span>
              <span>f</span>
              <span className="move">o</span>
            </a>
            <br />
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Work;
