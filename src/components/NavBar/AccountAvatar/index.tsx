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
import { useAuthContext } from "../../../store/auth/AuthContext";

const AccountAvatar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { userProfile, signOut } = useAuthContext();

  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    signOut?.().then(() => handleClose());
  };

  return userProfile ? (
    <>
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
              src={userProfile?.imageUrl}
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
            src={userProfile?.imageUrl}
            alt=""
          />
          <div className="d-flex flex-column">
            <div className="d-flex flex-row user-name">
              <span>
                <Typography>{userProfile?.name}</Typography>
              </span>
            </div>
            <div className="d-flex flex-row">
              <span className="email">
                <Typography>{userProfile?.email}</Typography>
              </span>
            </div>
          </div>
        </MenuItem>
        <MenuItem data-testid="sign-out-button">
          <a
            className="sign-out-text"
            href="/api/logout"
            onClick={handleSignOut}
          >
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            <Typography>Sign out</Typography>
          </a>
        </MenuItem>
      </Menu>
    </>
  ) : null;
};

export default AccountAvatar;
