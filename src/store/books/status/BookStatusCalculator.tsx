/* eslint-disable no-unused-vars */
import { Record } from "../catalog/Types";
import BookRuleFactory from "./BookRuleFactory";
import { BookStatus, LoggedInUserPerspective, Rule } from "./Types";
import PatronUserPerspective from "./UserPerspective/PatronUserPerspective";
import ViewerPerspective from "./UserPerspective/ViewerPerspective";

function isOwnedByLoggedInUser(
  records: Record[],
  loggedInUserEmail: string
): boolean {
  return (
    records.filter((record) => record.email === loggedInUserEmail).length > 0
  );
}
export default class BookStatusCalculator {
  public static calculateBookStatus(
    records: Record[],
    loggedInUserEmail: string
  ): string {
    let loggedInUserPerspective: LoggedInUserPerspective;
    if (
      BookStatusCalculator.isLoggedInUserRecords(records, loggedInUserEmail)
    ) {
      loggedInUserPerspective = new PatronUserPerspective(loggedInUserEmail);
    } else {
      loggedInUserPerspective = new ViewerPerspective();
    }
    return loggedInUserPerspective.showStatus(records);
  }

  private static isLoggedInUserRecords(
    records: Record[],
    loggedInUserEmail: string
  ) {
    return (
      records.filter((record) => record.email === loggedInUserEmail).length > 0
    );
  }
}
