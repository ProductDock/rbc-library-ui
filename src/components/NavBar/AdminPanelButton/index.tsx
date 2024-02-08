/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "@mui/material";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import "./AdminPanelButton.css";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../constants/routes";

const AdminPanelButton = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(routes.ADMIN_HOME);
  };

  return (
    <Link className="panel-button side-text" underline="none" onClick={onClick}>
      Admin Panel
      <InsertChartOutlinedIcon className="panel-icon" />
    </Link>
  );
};

export default AdminPanelButton;
