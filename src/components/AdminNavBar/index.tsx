import { AppBar } from "@mui/material";
import AccountAvatar from "../AccountAvatar";
import NavBarLogo from "../NavBarLogo";

const AdminNavBar = () => {
  return (
    <AppBar className="navbar">
      <div className="navbar-div">
        <NavBarLogo />

        <div className="right-side">
          <AccountAvatar />
        </div>
      </div>
    </AppBar>
  );
};
export default AdminNavBar;
