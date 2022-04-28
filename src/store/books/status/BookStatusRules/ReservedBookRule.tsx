/* eslint-disable class-methods-use-this */
import { Record } from "../../catalog/Types";
import { Rule } from "../Types";

export default class ReservedBookRule implements Rule {
  public applies(records: Record[]): boolean {
    const reservations = records.filter(
      (record) => record.status === "RESERVED"
    );
    const availableBooks = records.filter(
      (record) => record.status === "AVAILABLE"
    ).length;
    if (reservations.length > 0 && availableBooks === 0) {
      return true;
    }
    return false;
  }
}
