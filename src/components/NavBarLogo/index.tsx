/* eslint-disable no-restricted-globals */
import "./NavBarLogo.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { routes } from "../../constants/routes";
import logo from "../../img/pd-logo.svg";

type Props = {
  handleClickLogo?: () => void;
};

const NavBarLogo = ({ handleClickLogo }: Props) => {
  const route = location.pathname.includes(routes.ADMIN_HOME)
    ? routes.ADMIN_HOME
    : routes.HOME;
  return (
    <Link to={route} className="navbar-info" onClick={handleClickLogo}>
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
  );
};

export default NavBarLogo;
