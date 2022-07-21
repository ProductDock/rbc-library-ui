import { Dialog, DialogContent, Typography } from "@mui/material";
import "./MobileUserRecordsModal.css";
import { forwardRef, Ref, useImperativeHandle, useState } from "react";
import { DetailedRecord } from "../../../../store/books/details/Types";
import BookStatusProperties from "../../../../store/books/status/BookStatusProperties";
import { BookStatus } from "../../../../store/books/status/Types";

type Props = {
  records?: DetailedRecord[];
};

export interface MobileUserRecordsRefObject {
  hideModal?: () => void;
  showModal?: () => void;
}

const MobileUserRecordsModal = forwardRef(
  ({ records }: Props, ref: Ref<MobileUserRecordsRefObject>) => {
    const [showed, setShowed] = useState(false);

    const showModal = () => {
      setShowed(true);
    };
    const hideModal = () => {
      setShowed(false);
    };

    useImperativeHandle(ref, () => ({ showModal, hideModal }));

    const getBookStatusProperties = (
      status: BookStatus | null,
      userFullName: string | null = ""
    ) => {
      return new BookStatusProperties(status, userFullName);
    };

    return (
      <Dialog open={showed} onClose={hideModal} className="dialog">
        <DialogContent>
          {records?.map((record) => {
            return (
              <div className="dialog-item">
                <Typography>
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
                <Typography fontWeight={300} fontSize={13}>
                  {record.date}
                </Typography>
              </div>
            );
          })}
        </DialogContent>
      </Dialog>
    );
  }
);

export default MobileUserRecordsModal;
