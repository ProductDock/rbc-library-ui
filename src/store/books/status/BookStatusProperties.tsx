import { BookStatus } from "./Types";

export default class BookStatusProperties {
  fontColor: string;

  backgroundColor: string;

  text: string;

  userFullName: string | null;

  constructor(status: BookStatus | null, userFullName: string | null) {
    switch (status) {
      case BookStatus.RENTED:
        this.fontColor = "#EA592A";
        this.backgroundColor = "#f9d0c3";
        this.text = "Rented by ";
        this.userFullName = userFullName;
        break;
      case BookStatus.RENTED_BY_YOU:
        this.fontColor = "#EA592A";
        this.backgroundColor = "#f9d0c3";
        this.text = "Rented by ";
        this.userFullName = "you";
        break;
      case BookStatus.RESERVED:
        this.fontColor = "#00609A";
        this.backgroundColor = "#C8EAFF";
        this.text = "Reserved by ";
        this.userFullName = userFullName;
        break;
      case BookStatus.RESERVED_BY_YOU:
        this.fontColor = "#00609A";
        this.backgroundColor = "#C8EAFF";
        this.text = "Reserved by ";
        this.userFullName = "you";
        break;
      default:
        this.fontColor = "";
        this.backgroundColor = "";
        this.text = "";
        this.userFullName = "";
        break;
    }
  }
}

export const getBookStatusProperties = (
  status: BookStatus | null,
  userFullName: string | null = ""
) => {
  return new BookStatusProperties(status, userFullName);
};
