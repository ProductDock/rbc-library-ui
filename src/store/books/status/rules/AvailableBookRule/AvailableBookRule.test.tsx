import BookStatusRecordsMock from "../mocks/BookStatusRecordsMock";
import AvailableBookRule from "./AvailableBookRule";

describe("AvailableBookRule", () => {
  test("should check is book status AVAILABLE when all books are available", async () => {
    const availableRecordsCount = 2;
    const rentedRecordsCount = 0;
    const reservedRecordsCount = 0;
    const bookStatusRecords = BookStatusRecordsMock();
    bookStatusRecords.getNumberOfRecordsByStatus
      .mockReturnValueOnce(availableRecordsCount)
      .mockReturnValueOnce(rentedRecordsCount)
      .mockReturnValueOnce(reservedRecordsCount);
    const rule = new AvailableBookRule(bookStatusRecords);

    const applies = rule.applies();

    expect(applies).toEqual(true);
  });

  test("should check that book status is not AVAILABLE when book is AVAILABLE and RENTED by logged in user", async () => {
    const availableRecordsCount = 1;
    const rentedRecordsCount = 1;
    const reservedRecordsCount = 0;
    const bookStatusRecords = BookStatusRecordsMock();
    bookStatusRecords.getNumberOfRecordsByStatus
      .mockReturnValueOnce(availableRecordsCount)
      .mockReturnValueOnce(rentedRecordsCount)
      .mockReturnValueOnce(reservedRecordsCount);
    const rule = new AvailableBookRule(bookStatusRecords);

    const applies = rule.applies();

    expect(applies).toEqual(false);
  });

  test("should check that book status is not AVAILABLE when number of books with status AVAILABLE is 0", async () => {
    const availableRecordsCount = 0;
    const rentedRecordsCount = 1;
    const reservedRecordsCount = 0;
    const bookStatusRecords = BookStatusRecordsMock();
    bookStatusRecords.getNumberOfRecordsByStatus
      .mockReturnValueOnce(availableRecordsCount)
      .mockReturnValueOnce(rentedRecordsCount)
      .mockReturnValueOnce(reservedRecordsCount);
    const rule = new AvailableBookRule(bookStatusRecords);

    const applies = rule.applies();

    expect(applies).toEqual(false);
  });
});
