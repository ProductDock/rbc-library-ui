import { AppBar } from "@mui/material";
import AccountAvatar from "../AccountAvatar";
import NavBarLogo from "../NavBarLogo";
import { routes } from "../../constants/routes";

const AdminNavBar = () => {
  return (
    <AppBar className="navbar">
      <div className="navbar-div">
        <NavBarLogo homeRoute={routes.ADMIN_HOME} />

        <div className="right-side">
          <AccountAvatar />
        </div>
      </div>
    </AppBar>
  );
};
export default AdminNavBar;
