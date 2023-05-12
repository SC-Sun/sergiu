import React from "react";
import "./Bio.css";
import { useSelector } from "react-redux";
const Bio = () => {
    
    const { bio, error } = useSelector((state) => state.bio);
  console.log(bio);
  return (
    <div className="bio-container">
      <p> {bio}</p> 
    </div>
  );
};

export default Bio;
