import { Link } from "react-router-dom";
import { AppBar, Typography } from "@mui/material";
import { routes } from "../../constants/routes";
import AccountAvatar from "../NavBar/AccountAvatar";
import logo from "../../img/pd-logo.svg";

const AdminNavBar = () => {
  return (
    <AppBar className="navbar">
      <div className="navbar-div">
        <Link to={routes.ADMIN_HOME} className="navbar-info">
          <img src={logo} alt="logo" className="logo" />
          <div className="navbar-text">
            <span className="navbar-company">
              <Typography>ProductDock</Typography>
            </span>
            <span className="navbar-title">
              <Typography>Library</Typography>
            </span>
          </div>
        </Link>

        <div className="right-side">
          <AccountAvatar />
        </div>
      </div>
    </AppBar>
  );
};
export default AdminNavBar;
