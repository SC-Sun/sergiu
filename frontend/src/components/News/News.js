import React from "react";
import "./News.css";

const upDate = [{
  theme: 'new creation',
  text:'so many thing to say..................',
  info: 'https://www.google.com/',
},{
  theme: 'wow',
  text:'amazing.................',
  info: 'https://www.google.com/',
}];

const News = () => {
  return (
    <div className="news-container">
     { upDate.map( (u) => {
     return  <div id={u.id}> 
      <h3>{u.theme}</h3>
      <p>{u.text}</p>
      <a href={u.info} target="_blank"  rel="noopener noreferrer">info____</a>
      </div>
     })}
    </div>
  );
};

export default News;
