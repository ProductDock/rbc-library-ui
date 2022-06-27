import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import PageRouter from "./router";
import AuthContextProvider from "./store/auth/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <div className="main-div">
          <PageRouter />
        </div>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
