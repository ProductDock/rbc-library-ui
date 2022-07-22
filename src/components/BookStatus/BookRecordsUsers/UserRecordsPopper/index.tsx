/* eslint-disable no-unused-vars */
import { Box, Paper, Popper, Typography } from "@mui/material";
import { forwardRef, Ref, useImperativeHandle, useState } from "react";
import { DetailedRecord } from "../../../../store/books/details/Types";
import BookStatusProperties from "../../../../store/books/status/BookStatusProperties";
import { BookStatus } from "../../../../store/books/status/Types";
import "./UserRecordsPopper.css";

type Props = {
  records?: DetailedRecord[];
};

export interface UserRecordsPopperRefObject {
  showPopper?: (event: any) => void;
  handleLeave?: () => void;
}

const UserRecordsPopper = forwardRef(
  ({ records }: Props, ref: Ref<UserRecordsPopperRefObject>) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const showPopper = (event: any) => {
      setAnchorEl(event.currentTarget);
    };

    const handleLeave = () => {
      setAnchorEl(null);
    };

    useImperativeHandle(ref, () => ({ showPopper, handleLeave }));

    const getBookStatusProperties = (
      status: BookStatus | null,
      userFullName: string | null = ""
    ) => {
      return new BookStatusProperties(status, userFullName);
    };

    return (
      <Popper
        open={open}
        anchorEl={anchorEl}
        onMouseLeave={handleLeave}
        sx={{
          marginTop: "0.8em !important",
        }}
      >
        {records?.map((record) => {
          return (
            <Paper elevation={0} sx={{ p: 1 }}>
              <Typography fontSize={12}>
                <span
                  style={{
                    color: `${
                      getBookStatusProperties(record.status).fontColor
                    }`,
                  }}
                >
                  {getBookStatusProperties(record.status).text}
                </span>
                {
                  getBookStatusProperties(record.status, record.user.fullName)
                    .userFullName
                }
              </Typography>
              <Typography fontWeight={300} fontSize={12}>
                {record.date}
              </Typography>
            </Paper>
          );
        })}
      </Popper>
    );
  }
);

export default UserRecordsPopper;
