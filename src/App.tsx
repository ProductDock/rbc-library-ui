import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import PageRouter from "./router";
import AuthContextProvider from "./store/auth/AuthContext";
import NewBookContextProvider from "./store/books/new/NewBookContext";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <NewBookContextProvider>
          <div className="main-div">
            <PageRouter />
          </div>
        </NewBookContextProvider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
