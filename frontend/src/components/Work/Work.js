import React from "react";
import "./Work.css";

const myWork = [{
  name: 'hopeless',
  about: 'no no no no hope',
  media: {
    photo:"http://www.sergiumatis.com/_MG_9196%20%C2%A9%20Evgenia%20Chetvertkova%20small.jpg",
    link:'http://www.sergiumatis.com/',
  } }, {
  name: 'hopeless',
  about: 'no no no no hope',
  media: {
    photo:"http://www.sergiumatis.com/_MG_9196%20%C2%A9%20Evgenia%20Chetvertkova%20small.jpg",
    link:'http://www.sergiumatis.com/',
  } 
},
{
  name: 'hopeless',
  about: 'no no no no hope',
  media: {
    photo:"http://www.sergiumatis.com/_MG_9196%20%C2%A9%20Evgenia%20Chetvertkova%20small.jpg",
    link:'http://www.sergiumatis.com/',
  } 
}
]
 
   const Work = () => {
  return (
    <div className="work-container">
    {myWork.map( (m) => {
      return <div id={m.id}>
<h3>{m.name}</h3>
<p>{m.about}</p>
<img src={m.media.photo} alt={m.name}/>   
 <a href={m.media.link} target="_blank"  rel="noopener noreferrer">info____</a> 
        </div> })}
      
    </div>
  );
};

export default Work; 
 
