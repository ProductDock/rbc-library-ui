/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import { useAuthContext } from "../../../auth/AuthContext";
import { Record } from "../../catalog/Types";
import { LoggedInUserPerspective } from "../Types";

export default class PatronUserPerspective implements LoggedInUserPerspective {
  loggedInUserEmail: string;

  constructor(loggedInUserEmail: string) {
    this.loggedInUserEmail = loggedInUserEmail;
  }

  public showStatus(records: Record[]): string {
    const userBookRecord = records.filter(
      (record) => record.email === this.loggedInUserEmail
    );
    // if (userBookRecord && userBookRecord.length > 0) {
    //   return userBookRecord.at(0)?.status;
    // }
    // return userBookRecord.at(0)?.status;
    return "RENTED_BY_YOU";
  }
}
