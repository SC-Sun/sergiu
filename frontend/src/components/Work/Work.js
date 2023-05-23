import React, { useEffect } from "react";
import "./Work.css";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../Work/redux/action";
import MovingText from "../../helpers/movingText";

const Work = () => {
  const { work, error } = useSelector((state) => state.work);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.getWorkStart());
  }, []);
  return (
    <div className="work-container">
      {work?.map((m, index) => {
        return (
          <div className="work-div" key={index}>
            <h2>{m.name}</h2>
            <p>{m.about}</p>
            <img src={m.photo} alt={m.name} />
            <br />
            <MovingText href={m.link} target="_blank" rel="noopener noreferrer">
              <span>I</span>
              <span>n</span>
              <span>f</span>
              <span className="move">o</span>
            </MovingText>
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
