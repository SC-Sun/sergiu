import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const navigationLinks = ["News", "Tours", "Work", "Contact"];
  return (
    <div className="nav-container">
      <ul className="list-container">
        {navigationLinks?.map((link, id) => {
          return (
            <li className="list" key={id}>
              <NavLink className='listText' to={link}>{link}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
