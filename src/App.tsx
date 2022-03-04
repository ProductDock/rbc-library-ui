import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import PageRouter from "./router";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <PageRouter />
        </header>
      </div>
    </Router>
  );
}

export default App;
