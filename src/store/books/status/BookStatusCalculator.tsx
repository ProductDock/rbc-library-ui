import { Record } from "../catalog/Types";
import BookRuleFactory from "./BookRuleFactory";
import { BookStatus, Rule } from "./Types";

export default class BookStatusCalculator {
  public static calculateBookStatus(
    records: Record[],
    loggedInUserEmail: string
  ): string {
    const bookStatuses = Object.keys(BookStatus);
    let bookStatus = "AVAILABLE";
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
