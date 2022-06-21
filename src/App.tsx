import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import PageRouter from "./router";
import AuthContextProvider from "./store/auth/AuthContext";
import BooksContextProvider from "./store/books/catalog/BooksContext";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <BooksContextProvider>
          <NavBar />
          <div className="main-div">
            <PageRouter />
          </div>
        </BooksContextProvider>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
