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
        <Typography>Admin home</Typography>
      </div>
    </div>
  );
};

export default AdminHomePage;
