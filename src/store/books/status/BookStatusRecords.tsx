import { Record } from "../catalog/Types";
import { BookStatus } from "./Types";

export default class BookStatusRecords {
  records: Record[];

  loggedInUserEmail: string;

  constructor(records: Record[], loggedInUserEmail: string) {
    this.loggedInUserEmail = loggedInUserEmail;
    this.records = records;
    records.forEach((record) => {
      if (
        record.status === BookStatus.RENTED &&
        record.email === loggedInUserEmail
      ) {
        record.status = BookStatus.RENTED_BY_YOU;
      } else if (
        record.status === BookStatus.RESERVED &&
        record.email === loggedInUserEmail
      ) {
        record.status = BookStatus.RESERVED_BY_YOU;
      }
    });
  }

  public getNumberOfRecordsByStatus(status: BookStatus): number {
    return this.records.filter((record) => record.status === status).length;
  }

  public getNumberOfAllBookRecords(): number {
    return this.records.length;
  }
}
