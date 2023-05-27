import React from "react";
import "./Main.css";
import { Route, Routes } from "react-router-dom";
import News from "../News/News";
import Tours from "../Tours/Tours";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";
import Impressum from "../Impressum/Impressum";
import Bio from "../Bio/Bio";
import tabTitle from "../../helpers/tabTitle";

const Main = () => {
  return (
    <div className="nav-container-right">
      <Routes>
        <Route path="/" />
        <Route path="/news" Component={News} />
        <Route path="/tours" Component={Tours} />
        <Route path="/work" Component={Work} />
        <Route path="/contact" Component={Contact} />
        <Route path="/bio" Component={Bio} />
        <Route path="/impressum" Component={Impressum} />
      </Routes>
    </div>
  );
};

export default Main;
