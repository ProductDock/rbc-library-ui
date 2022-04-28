/* eslint-disable class-methods-use-this */
import { Record } from "../../catalog/Types";
import BookRuleFactory from "../BookRuleFactory";
import { BookStatus, LoggedInUserPerspective, Rule } from "../Types";

export default class ViewerPerspective implements LoggedInUserPerspective {
  showStatus(records: Record[]): string {
    const bookStatuses = Object.keys(BookStatus);
    let bookStatus = "AVAILABLE";
    bookStatuses.forEach((status) => {
      const rule: Rule = BookRuleFactory.for(status);
      if (rule.applies(records)) {
        bookStatus = status;
      }
    });
    return bookStatus;
  }
}
