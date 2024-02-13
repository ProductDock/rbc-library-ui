import "./AdminHomePage.css";
import { Typography } from "@mui/material";
import NavBar from "../../components/NavBar";
import SideMenu from "../../components/SideMenu";

const AdminHomePage = () => {
  return (
    <div>
      <SideMenu />
      <NavBar showSearchBar={false} />

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
