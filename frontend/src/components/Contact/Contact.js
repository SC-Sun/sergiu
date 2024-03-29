import React from "react";
import "./Contact.css";
import tabTitle from "../../helpers/tabTitle";

const contactMe = {
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",
  email: "mailto:sergiu.@example.com",
  fb: "https://www.facebook.com/sergiu.matis/",
  IG: "https://www.instagram.com/sergiu.matis/?hl=de",
};
const Contact = () => {
  tabTitle("Sergiu Matis | Contact");
  return (
    <div className="contact-container">
      <p> {contactMe.text}</p>
      <a href={contactMe.email} target="_blank" rel="noopener noreferrer">
        {" "}
        <span>E</span>
        <span>-</span>
        <span>M</span>
        <span>a</span>
        <span>i</span>
        <span className="move">l</span>
      </a>
      <br />
      <br />
      <span>
        {" "}
        <a href={contactMe.fb} target="_blank" rel="noopener noreferrer">
          {" "}
          <span>F</span>
          <span>a</span>
          <span>c</span>
          <span>e</span>
          <span>b</span>
          <span>o</span>
          <span>o</span>
          <span className="move">k</span>
        </a>{" "}
      </span>

      <span>
        {" "}
        <a href={contactMe.IG} target="_blank" rel="noopener noreferrer">
          {" "}
          <span>I</span>
          <span>n</span>
          <span>s</span>
          <span>t</span>
          <span>a</span>
          <span>g</span>
          <span>r</span>
          <span>a</span>
          <span className="move">m</span>
        </a>{" "}
      </span>
    </div>
  );
};

export default Contact;
