import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import PageRouter from "./router";

function App() {
  return (
    <Router>
      <div className="App">
        <PageRouter />
      </div>
    </Router>
  );
}

export default App;
