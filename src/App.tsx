import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import PageRouter from "./router";
<<<<<<< HEAD
import logo from "./img/pd-logo.svg";
import AuthContextProvider from "./store/auth/AuthContext";
import AccountAvatar from "./components/AccountAvatar";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <NavBar />
        <div className="main-div">
          <PageRouter />
          <div className="account-avatar">
            <AccountAvatar />
          </div>
        </div>
      </Router>
    </AuthContextProvider>
=======

function App() {
  return (
    <Router>
      <NavBar />
      <div className="main-div">
        <PageRouter />
      </div>
    </Router>
>>>>>>> 84ad5fb (Refactored navbar to be a separate component and fixed fonts)
  );
}

export default App;
