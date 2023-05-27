import Main from "../Main/Main";
import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";
import "./App.css";
import tabTitle from "../../helpers/tabTitle";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink
          to="/"
          className="header-text"
          onClick={() => {
            tabTitle("Sergiu Matis");
          }}
        >
          <span>Sergiu Matis</span>
        </NavLink>
        <NavLink to="/bio" className="header-text">
          <span>Bio</span>
        </NavLink>
      </header>
      <div className="container">
        <div className="left">
          <Navigation />
        </div>
        <div className="right">
          <Main />
        </div>
      </div>
      <footer>
        <NavLink className="impressum-text" to="/Impressum">
          <span>Impressum</span>
        </NavLink>{" "}
      </footer>
    </div>
  );
}

export default App;
