import React from "react";
import "./Contact.css";

const contactMe = {
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",
  email: "mailto:sergiu.@example.com",
  fb: "https://www.google.com/",
  IG: "https://www.google.com/",
};
const Contact = () => {
  return (
    <div className="contact-container">
      <p> {contactMe.text}</p>
      <a href={contactMe.email} target="_blank" rel="noopener noreferrer">
        {" "}
        E-Mail
      </a>
      <br />
      <br />
      <span>
        {" "}
        <a href={contactMe.email} target="_blank" rel="noopener noreferrer">
          {" "}
          Facebook
        </a>{" "}
      </span>
      <br />
      <span>
        {" "}
        <a href={contactMe.email} target="_blank" rel="noopener noreferrer">
          {" "}
          Instagram
        </a>{" "}
      </span>
    </div>
  );
};

export default Contact;
