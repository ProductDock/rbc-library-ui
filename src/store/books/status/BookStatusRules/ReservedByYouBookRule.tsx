import BookStatusRecords from "../BookStatusRecords";
import { BookStatus, Rule } from "../Types";

export default class ReservedByYouBookRule implements Rule {
  bookStatusRecords: BookStatusRecords;

  constructor(bookStatusRecords: BookStatusRecords) {
    this.bookStatusRecords = bookStatusRecords;
  }

  public applies(): boolean {
    return this.getNumberOfReservedByYouRecords() > 0;
  }

  private getNumberOfReservedByYouRecords() {
    return this.bookStatusRecords.getNumberOfRecordsByStatus(
      BookStatus.RESERVED_BY_YOU
    );
  }
}
