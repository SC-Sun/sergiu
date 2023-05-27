import React, { useEffect } from "react";
import "./Bio.css";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../Bio/redux/action";
import tabTitle from "../../helpers/tabTitle";

const Bio = () => {
    const { bio, error } = useSelector((state) => state.bio);
    const dispatch = useDispatch();
    useEffect( () => {
    dispatch(action.getBioStart());
    },[]);
    tabTitle('Sergiu Matis | Bio');
  return (
    <div className="bio-container">
       {bio?.map((text, index) => {
        return (
          <div  key={index}><p>{text.bio}</p> </div>
        )
      })} 
    </div>
  );
};

export default Bio;
