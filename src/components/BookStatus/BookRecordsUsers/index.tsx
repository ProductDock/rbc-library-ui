/* eslint-disable react/jsx-wrap-multilines */
import {
  Avatar,
  AvatarGroup,
  Dialog,
  DialogContent,
  Paper,
  Popper,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import "./BookRecordsUsers.css";
import { RANDOM_USERS } from "./data";
import { MediaQueries } from "../../../constants/mediaQueries";

const BookRecordsUsers = () => {
  const isLargeScreen = useMediaQuery(MediaQueries.X_MEDIUM);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleLeave = () => {
    setAnchorEl(null);
  };

  const [openMobile, setOpenMobile] = useState(false);
  const showPopper = (event: any) => {
    if (isLargeScreen) {
      setAnchorEl(event.currentTarget);
    }
  };
  const showMobile = () => {
    if (!isLargeScreen) setOpenMobile(true);
  };
  const handleCloseMobile = () => {
    setOpenMobile(false);
  };
  return (
    <>
      <Popper
        className="rental-info-popper"
        open={open}
        anchorEl={anchorEl}
        onMouseLeave={handleLeave}
      >
        {RANDOM_USERS.map((user) => {
          return (
            <Paper elevation={0} sx={{ p: 1 }}>
              <p>Rented by {user.fullname}</p>
              <p>{user.date}</p>
            </Paper>
          );
        })}
      </Popper>
      <Dialog open={openMobile} onClose={handleCloseMobile} className="dialog">
        <DialogContent>
          {RANDOM_USERS.map((user) => {
            return (
              <div>
                <p>Rented by {user.fullname}</p>
                <p>{user.date}</p>
              </div>
            );
          })}
        </DialogContent>
      </Dialog>
      <AvatarGroup
        max={4}
        variant="rounded"
        componentsProps={{
          additionalAvatar: {
            onClick: showMobile,
            onMouseEnter: showPopper,
            onMouseLeave: handleLeave,
          },
        }}
      >
        {RANDOM_USERS.map((user) => {
          return (
            <Tooltip
              title={
                <div>
                  <p>Rented by {user.fullname}</p>
                  <p>{user.date}</p>
                </div>
              }
            >
              <Avatar alt={user.fullname} src={user.image} variant="rounded" />
            </Tooltip>
          );
        })}
      </AvatarGroup>
    </>
  );
};

export default BookRecordsUsers;
