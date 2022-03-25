import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { Typography } from "@mui/material";
import userImage from "../../loggedInUser.png";
import "./AccountAvatar.css";

const AccountAvatar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const signOut = () => {
    // To be replaced with logout handling
    handleClose();
  };
  return (
    <>
      <Box>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <img className="credentials-image-navbar" src={userImage} alt="" />
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
          <img className="credentials-image" src={userImage} alt="" />
          <div className="d-flex flex-column">
            <div className="d-flex flex-row user-name">
              <span>
                <Typography>Name LastName</Typography>
              </span>
            </div>
            <div className="d-flex flex-row">
              <span className="email">
                <Typography>example@productdock.com</Typography>
              </span>
            </div>
          </div>
        </MenuItem>
        <MenuItem onClick={signOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Typography>Sign out</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountAvatar;
