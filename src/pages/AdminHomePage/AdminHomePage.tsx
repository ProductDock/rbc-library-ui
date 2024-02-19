import "./AdminHomePage.css";
import { Typography } from "@mui/material";
import SideMenu from "../../components/SideMenu";
import AdminNavBar from "../../components/AdminNavBar";

const AdminHomePage = () => {
  return (
    <div>
      <SideMenu />
      <AdminNavBar />

      <div className="main">
        <div className="welcome-text">
          <Typography className="small-font">Library admin portal:</Typography>
          <Typography className="large-font">
            <b>Welcome</b> Admin!
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
