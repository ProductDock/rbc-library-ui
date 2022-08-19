import { Dialog, DialogContent, Typography } from "@mui/material";
import "./UserRecordsMobileModal.css";
import { forwardRef, Ref, useImperativeHandle, useState } from "react";
import { DetailedRecord } from "../../../../store/books/details/Types";
import { getBookStatusProperties } from "../../../../store/books/status/BookStatusProperties";
import { formatDate } from "../../../../utils/dateUtil";

type Props = {
  records?: DetailedRecord[];
};

export interface UserRecordsMobileRefObject {
  showModal?: () => void;
}

const UserRecordsMobileModal = forwardRef(
  ({ records }: Props, ref: Ref<UserRecordsMobileRefObject>) => {
    const [showed, setShowed] = useState(false);

    const showModal = () => {
      setShowed(true);
    };
    const hideModal = () => {
      setShowed(false);
    };

    useImperativeHandle(ref, () => ({ showModal }));

    return (
      <Dialog open={showed} onClose={hideModal} className="records-dialog">
        <DialogContent>
          {records?.map((record) => {
            return (
              <div key={record.user.email} className="records-dialog-item">
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
                  {formatDate(new Date(record.date))}
                </Typography>
              </div>
            );
          })}
        </DialogContent>
      </Dialog>
    );
  }
);

export default UserRecordsMobileModal;
