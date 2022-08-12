import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import PageRouter from "./router";
import AuthContextProvider from "./store/auth/AuthContext";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <div className="main-div">
          <PageRouter />
        </div>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
