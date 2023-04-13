import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Notification from "./components/Notification";
import PageRouter from "./router";
import AuthContextProvider from "./store/auth/AuthContext";
import NewBookContextProvider from "./store/books/new/NewBookContext";
import SuccessScreenContextProvider from "./store/books/success/SuccessScreenContext";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <NewBookContextProvider>
          <SuccessScreenContextProvider>
            <div className="main-div">
              <PageRouter />
              <Notification />
            </div>
          </SuccessScreenContextProvider>
        </NewBookContextProvider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
