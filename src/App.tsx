import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { AppBar } from "@mui/material";
import PageRouter from "./router";
import logo from "./img/pd-logo.svg";
import AccountAvatar from "./components/AccountAvatar";

function App() {
  return (
    <Router>
      <AppBar className="navbar">
        <div className="navbar-div">
          <div className="navbar-info">
            <img src={logo} alt="logo" className="logo" />
            <div className="navbar-text">
              <p className="navbar-company">ProductDock</p>
              <p className="navbar-title">Library</p>
            </div>
          </div>
          <div className="account-avatar">
            <AccountAvatar />
          </div>
        </div>
      </AppBar>
      <div className="main-div">
        <PageRouter />
      </div>
    </Router>
  );
}

export default App;
