import { Record } from "../catalog/Types";
import BookStatusRecords from "./BookStatusRecords";
import AvailableBookRule from "./BookStatusRules/AvailableBookRule";
import RentedBookRule from "./BookStatusRules/RentedBookRule";
import RentedByYouBookRule from "./BookStatusRules/RentedByYouBookRule";
import ReservedBookRule from "./BookStatusRules/ReservedBookRule";
import ReservedByYouBookRule from "./BookStatusRules/ReservedByYouBookRule";
import { Rule } from "./Types";

export default class BookRuleFactory {
  public static for = (
    status: string,
    records: Record[],
    loggedInUserEmail: string
  ): Rule => {
    const bookStatusRecords = new BookStatusRecords(records, loggedInUserEmail);
    switch (status) {
      case "AVAILABLE":
        return new AvailableBookRule(bookStatusRecords);
      case "RENTED":
        return new RentedBookRule(bookStatusRecords);
      case "RESERVED":
        return new ReservedBookRule(bookStatusRecords);
      case "RENTED_BY_YOU":
        return new RentedByYouBookRule(bookStatusRecords);
      case "RESERVED_BY_YOU":
        return new ReservedByYouBookRule(bookStatusRecords);
      default:
        return new AvailableBookRule(bookStatusRecords);
    }
  };
}
