/* eslint-disable react/jsx-wrap-multilines */
import {
  Avatar,
  AvatarGroup,
  Paper,
  Popper,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useRef, useState } from "react";
import "./BookRecordsUsers.css";
import { MediaQueries } from "../../../constants/mediaQueries";
import { DetailedRecord } from "../../../store/books/details/Types";
import { BookStatus } from "../../../store/books/status/Types";
import BookStatusProperties from "../../../store/books/status/BookStatusProperties";
import MobileUserRecordsModal, {
  MobileUserRecordsRefObject,
} from "./MobileUserRecordsModal";

type Props = {
  records?: DetailedRecord[];
  bookStatus: BookStatus | null;
};

const BookRecordsUsers = ({ records, bookStatus }: Props) => {
  const isLargeScreen = useMediaQuery(MediaQueries.X_MEDIUM);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const mobileUserRecordsModal = useRef<MobileUserRecordsRefObject>(null);

  const showMobileModal = () => {
    if (!isLargeScreen) {
      mobileUserRecordsModal?.current?.showModal?.();
    }
  };

  const showPopper = (event: any) => {
    if (isLargeScreen) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleLeave = () => {
    setAnchorEl(null);
  };

  const getBookStatusProperties = (
    status: BookStatus | null,
    userFullName: string | null = ""
  ) => {
    return new BookStatusProperties(status, userFullName);
  };

  return (
    <>
      <Popper
        className="rental-info-popper"
        open={open}
        anchorEl={anchorEl}
        onMouseLeave={handleLeave}
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
      <MobileUserRecordsModal ref={mobileUserRecordsModal} records={records} />
      <AvatarGroup
        max={3}
        variant="rounded"
        componentsProps={{
          additionalAvatar: {
            sx: {
              color: `${getBookStatusProperties(bookStatus).fontColor}`,
              backgroundColor: `${
                getBookStatusProperties(bookStatus).backgroundColor
              }`,
              fontSize: "12px",
              zIndex: 1203,
            },
            onClick: showMobileModal,
            onMouseEnter: showPopper,
            onMouseLeave: handleLeave,
          },
        }}
      >
        {records?.map((record) => {
          return (
            <Tooltip
              title={
                <div>
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
                      getBookStatusProperties(
                        record.status,
                        record.user.fullName
                      ).userFullName
                    }
                  </Typography>
                  <Typography fontWeight={300} fontSize={12}>
                    {record.date}
                  </Typography>
                </div>
              }
            >
              <Avatar
                alt={record.user.fullName}
                src={record.user.image}
                variant="rounded"
                sx={{ zIndex: `120${records?.indexOf(record)}` }}
              />
            </Tooltip>
          );
        })}
      </AvatarGroup>
    </>
  );
};

export default BookRecordsUsers;
