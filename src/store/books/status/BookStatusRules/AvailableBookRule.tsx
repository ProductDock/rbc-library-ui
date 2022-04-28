/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import { Record } from "../../catalog/Types";
import { BookStatus, Rule } from "../Types";

export default class AvailableBookRule implements Rule {
  public applies(records: Record[]): boolean {
    const availableBooks = records.filter(
      (record) => record.status === BookStatus.AVAILABLE
    ).length;
    if (availableBooks > 0) {
      return true;
    }
    return false;
  }
}
