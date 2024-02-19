/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import "./NavBarLogo.css";
import { Typography } from "@mui/material";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import logo from "../../img/pd-logo.svg";
import { routes } from "../../constants/routes";

type Props = {
  homeRoute: string;
};

const NavBarLogo = ({ homeRoute }: Props) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClickLogo = () => {
    setSearchParams("");
    if (location.pathname === routes.HOME) navigate(0);
  };

  return (
    <Link to={homeRoute} className="navbar-info" onClick={handleClickLogo}>
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
