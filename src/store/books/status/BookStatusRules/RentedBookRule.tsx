/* eslint-disable class-methods-use-this */
import { Record } from "../../catalog/Types";
import { Rule } from "../Types";

export default class RentedBookRule implements Rule {
  public applies(records: Record[]): boolean {
    const rentals = records.filter(
      (record) => record.status === "RENTED"
    ).length;
    if (rentals === records.length) {
      return true;
    }
    return false;
  }
}
