import { DetailedRecord } from "../details/Types";
import { Record } from "../catalog/Types";
import { BookStatus } from "./Types";

export default class BookStatusRecords {
  records: any;

  loggedInUserEmail: string;

  constructor(records: DetailedRecord[] | Record[], loggedInUserEmail: string) {
    this.loggedInUserEmail = loggedInUserEmail;
    this.records = records;
    records.forEach((record: any) => {
      if (
        record.status === BookStatus.RENTED &&
        (record.user?.email || record.email) === loggedInUserEmail
      ) {
        record.status = BookStatus.RENTED_BY_YOU;
      } else if (
        record.status === BookStatus.RESERVED &&
        (record.user?.email || record.email) === loggedInUserEmail
      ) {
        record.status = BookStatus.RESERVED_BY_YOU;
      }
    });
  }

  public getNumberOfRecordsByStatus(status: BookStatus): number {
    return this.records.filter((record: any) => record.status === status)
      .length;
  }

  public getNumberOfAllBookRecords(): number {
    return this.records.length;
  }
}
