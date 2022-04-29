import BookStatusRecords from "../BookStatusRecords";
import { BookStatus, Rule } from "../Types";

export default class RentedByYouBookRule implements Rule {
  bookStatusRecords: BookStatusRecords;

  constructor(bookStatusRecords: BookStatusRecords) {
    this.bookStatusRecords = bookStatusRecords;
  }

  public applies(): boolean {
    return this.getNumberOfRentedByYouRecords() > 0;
  }

  private getNumberOfRentedByYouRecords() {
    return this.bookStatusRecords.getNumberOfRecordsByStatus(
      BookStatus.RENTED_BY_YOU
    );
  }
}
