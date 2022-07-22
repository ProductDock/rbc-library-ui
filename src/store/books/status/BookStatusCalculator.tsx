import { DetailedRecord } from "../details/Types";
import { Record } from "../catalog/Types";
import BookRuleFactory from "./BookRuleFactory";
import { BookStatus, Rule } from "./Types";

export default class BookStatusCalculator {
  public static calculate(
    records: DetailedRecord[] | Record[],
    loggedInUserEmail: string
  ): BookStatus {
    const bookStatuses = Object.values(BookStatus);
    let bookStatus = BookStatus.AVAILABLE;
    bookStatuses.forEach((status) => {
      const rule: Rule = BookRuleFactory.for(
        status,
        records,
        loggedInUserEmail
      );
      if (rule.applies()) {
        bookStatus = status;
      }
    });
    return bookStatus;
  }
}
