import BookStatusRecords from "../BookStatusRecords";
import { BookStatus, Rule } from "../Types";

export default class RentedBookRule implements Rule {
  bookStatusRecords: BookStatusRecords;

  constructor(bookStatusRecords: BookStatusRecords) {
    this.bookStatusRecords = bookStatusRecords;
  }

  public applies(): boolean {
    if (
      this.getNumberOfRentedRecords() ===
      this.bookStatusRecords.getNumberOfAllBookRecords()
    ) {
      return true;
    }
    return false;
  }

  private getNumberOfRentedRecords() {
    return this.bookStatusRecords.getNumberOfRecordsByStatus(BookStatus.RENTED);
  }
}
