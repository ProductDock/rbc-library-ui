import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import PageRouter from "./router";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="main-div">
        <PageRouter />
      </div>
    </Router>
  );
}

export default App;
