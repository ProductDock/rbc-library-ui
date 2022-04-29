import BookStatusRecords from "../BookStatusRecords";
import { BookStatus, Rule } from "../Types";

export default class ReservedBookRule implements Rule {
  bookStatusRecords: BookStatusRecords;

  constructor(bookStatusRecords: BookStatusRecords) {
    this.bookStatusRecords = bookStatusRecords;
  }

  public applies(): boolean {
    if (
      this.getNumberOfReservedRecords() > 0 &&
      this.getNumberOfAvailableRecords() === 0
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

  private getNumberOfReservedRecords() {
    return this.bookStatusRecords.getNumberOfRecordsByStatus(
      BookStatus.RESERVED
    );
  }
}
