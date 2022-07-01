import { Record } from "../catalog/Types";
import BookStatusRecords from "./BookStatusRecords";
import AvailableBookRule from "./rules/AvailableBookRule/AvailableBookRule";
import RentedBookRule from "./rules/RentedBookRule/RentedBookRule";
import RentedByYouBookRule from "./rules/RentedByYouBookRule/RentedByYouBookRule";
import ReservedBookRule from "./rules/ReservedBookRule/ReservedBookRule";
import ReservedByYouBookRule from "./rules/ReservedByYouBookRule/ReservedByYouBookRule";
import { BookStatus, Rule } from "./Types";

export default class BookRuleFactory {
  public static for = (
    status: BookStatus,
    records: Record[],
    loggedInUserEmail: string
  ): Rule => {
    const bookStatusRecords = new BookStatusRecords(records, loggedInUserEmail);
    switch (status) {
      case BookStatus.AVAILABLE:
        return new AvailableBookRule(bookStatusRecords);
      case BookStatus.RENTED:
        return new RentedBookRule(bookStatusRecords);
      case BookStatus.RESERVED:
        return new ReservedBookRule(bookStatusRecords);
      case BookStatus.RENTED_BY_YOU:
        return new RentedByYouBookRule(bookStatusRecords);
      case BookStatus.RESERVED_BY_YOU:
        return new ReservedByYouBookRule(bookStatusRecords);
      default:
        return new AvailableBookRule(bookStatusRecords);
    }
  };
}
