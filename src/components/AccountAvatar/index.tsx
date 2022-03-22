import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
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
    handleClose();
  };
  return (
    <>
      <Box>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <img className="credentials-image" src={userImage} alt="NN" />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        onClose={handleClose}
        open={open}
        MenuListProps={{
          sx: {
            padding: 0,
          },
        }}
        PaperProps={{
          sx: {
            mt: 1.5,
            borderRadius: "8px",
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          sx={{
            backgroundColor: "#00609a",
            color: "#ffffff",
            padding: "16px",
            pointerEvents: "none",
            "&.MuiMenuItem-root:hover": {
              backgroundColor: "#00609a",
              cursor: "default",
            },
          }}
          className="user-details-menu-item user-details-menu-item-colors"
        >
          <img className="credentials-image" src={userImage} alt="" />
          <div className="d-flex flex-column">
            <div className="d-flex flex-row">
              <span> Nenad Becanovic</span>
            </div>
            <div className="d-flex flex-row">
              <span className="email"> nenad.becanovic@productdock.com</span>
            </div>
          </div>
        </MenuItem>
        <MenuItem onClick={signOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Sign out
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountAvatar;
