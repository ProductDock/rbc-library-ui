import BookStatusRecordsMock from "../mocks/BookStatusRecordsMock";
import ReservedBookRule from "./ReservedBookRule";

describe("ReservedBookRule", () => {
  test("should check is book status RESERVED when all books are reserved", async () => {
    const availableRecordsCount = 0;
    const reservedRecordsCount = 2;
    const bookStatusRecords = BookStatusRecordsMock();
    bookStatusRecords.getNumberOfRecordsByStatus
      .mockReturnValueOnce(availableRecordsCount)
      .mockReturnValueOnce(reservedRecordsCount);
    const rule = new ReservedBookRule(bookStatusRecords);

    const applies = rule.applies();

    expect(applies).toEqual(true);
  });

  test("should check that book status is not RESERVED when there are available books", async () => {
    const availableRecordsCount = 1;
    const bookStatusRecords = BookStatusRecordsMock();
    bookStatusRecords.getNumberOfRecordsByStatus.mockReturnValueOnce(
      availableRecordsCount
    );
    const rule = new ReservedBookRule(bookStatusRecords);

    const applies = rule.applies();

    expect(applies).toEqual(false);
  });
});
