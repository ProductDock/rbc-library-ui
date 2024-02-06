import { useNavigate } from "react-router";
import { useEffect } from "react";
import { Typography } from "@mui/material";
import "./AdminHomePage.css";
import NavBar from "../../components/NavBar";
import { useAuthContext } from "../../store/auth/AuthContext";
import { routes } from "../../constants/routes";
import { userRoles } from "../../constants/userRoles";
import SideMenu from "../../components/SideMenu";
import NewBookForm from "../../components/NewBookForm";

const AdminHomePage = () => {
  const { userProfile } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (userProfile?.role !== userRoles.ROLE_ADMIN) {
      navigate(routes.HOME);
    }
  }, [userProfile]);

  return (
    <div>
      <NavBar />
      <div className="side-bar">
        <SideMenu />
      </div>
      <div className="main">
        <Typography>Main page</Typography>
        <NewBookForm />
      </div>
    </div>
  );
};

export default AdminHomePage;
