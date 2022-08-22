/* eslint-disable no-unused-vars */
import { Paper, Popper, Typography } from "@mui/material";
import { forwardRef, Ref, useImperativeHandle, useState } from "react";
import { DetailedRecord } from "../../../../store/books/details/Types";
import { getBookStatusProperties } from "../../../../store/books/status/BookStatusProperties";
import { formatDate } from "../../../../utils/dateUtil";

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

    return (
      <Popper
        open={open}
        anchorEl={anchorEl}
        onMouseLeave={handleLeave}
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 15],
            },
          },
        ]}
      >
        {records?.map((record) => {
          return (
            <Paper key={record.user.email} elevation={0} sx={{ p: 1 }}>
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
                {formatDate(new Date(record.date))}
              </Typography>
            </Paper>
          );
        })}
      </Popper>
    );
  }
);

export default UserRecordsPopper;
