import { Typography } from "@mui/material";
import "./AdminHomePage.css";
import NavBar from "../../components/NavBar";
import SideMenu from "../../components/SideMenu";

const AdminHomePage = () => {
  return (
    <div>
      <SideMenu />
      <NavBar showSearchBar={false} />
      <div className="main">
        <Typography>Main page</Typography>
      </div>
    </div>
  );
};

export default AdminHomePage;
