import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { Typography } from "@mui/material";
import "./AccountAvatar.css";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../store/auth/AuthContext";
import { routes } from "../../constants/routes";

const AccountAvatar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { userProfile, signOut } = useAuthContext();
  const navigate = useNavigate();

  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    signOut?.().then(() => navigate(routes.WELCOME));
  };

  return userProfile ? (
    <div className="account-avatar">
      <Box>
        <Tooltip title="Account settings">
          <IconButton
            data-testid="avatar-button"
            onClick={handleClick}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <img
              referrerPolicy="no-referrer"
              className="credentials-image-navbar"
              src={userProfile?.image}
              alt=""
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        onClose={handleClose}
        open={open}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <img
            referrerPolicy="no-referrer"
            className="credentials-image"
            src={userProfile?.image}
            alt=""
          />
          <div className="d-flex flex-column">
            <div className="d-flex flex-row user-name">
              <span>
                <Typography>{userProfile?.fullName}</Typography>
              </span>
            </div>
            <div className="d-flex flex-row">
              <span className="email">
                <Typography>{userProfile?.email}</Typography>
              </span>
            </div>
          </div>
        </MenuItem>
        <MenuItem onClick={handleSignOut} data-testid="sign-out-button">
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Typography>Sign out</Typography>
        </MenuItem>
      </Menu>
    </div>
  ) : null;
};

export default AccountAvatar;
