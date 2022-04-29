import BookStatusRecords from "../BookStatusRecords";
import { BookStatus, Rule } from "../Types";

export default class AvailableBookRule implements Rule {
  bookStatusRecords: BookStatusRecords;

  constructor(bookStatusRecords: BookStatusRecords) {
    this.bookStatusRecords = bookStatusRecords;
  }

  public applies(): boolean {
    if (
      this.getNumberOfAvailableRecords() > 0 &&
      this.loggedInUserHasNoRecords()
    ) {
      return true;
    }
    return false;
  }

  private getNumberOfAvailableRecords() {
    return this.bookStatusRecords.getNumberOfRecordsByStatus(
      BookStatus.AVAILABLE
    );
  }

  private loggedInUserHasNoRecords(): boolean {
    return (
      this.bookStatusRecords.getNumberOfRecordsByStatus(
        BookStatus.RENTED_BY_YOU
      ) === 0 &&
      this.bookStatusRecords.getNumberOfRecordsByStatus(
        BookStatus.RESERVED_BY_YOU
      ) === 0
    );
  }
}
