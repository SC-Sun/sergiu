import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navigationLinks = ["News", "Tours", "Work", "Contact"];
  return (
    <div className="nav-container">
      <ul className="list-container">
        {navigationLinks?.map((link, id) => {
          return (
            <li className="list" key={id}>
              <Link className='listText' to={link}>{link}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
