import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import PageRouter from "./router";
import logo from "./img/pd-logo.svg";
import AuthContextProvider from "./store/auth/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <NavBar />
        <div className="main-div">
          <PageRouter />
        </div>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
