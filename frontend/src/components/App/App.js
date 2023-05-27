import Main from "../Main/Main";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import "./App.css";
import tabTitle from "../../helpers/tabTitle";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link
          to="/"
          className="header-text"
          onClick={() => {
            tabTitle("Sergiu Matis");
          }}
        >
          <span>Sergiu Matis</span>
        </Link>
        <Link to="/bio" className="header-text">
          <span>Bio</span>
        </Link>
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
        <Link className="impressum-text" to="/Impressum">
          <span>Impressum</span>
        </Link>{" "}
      </footer>
    </div>
  );
}

export default App;
