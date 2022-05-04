import BookStatusRecordsMock from "../mocks/BookStatusRecordsMock";
import ReservedByYouBookRule from "./ReservedByYouBookRule";

describe("RentedByYouBookRule", () => {
  test("should check is book status RESERVED_BY_YOU when there is a book reserved by logged in user", async () => {
    const reservedByYouRecordsCount = 1;
    const bookStatusRecords = BookStatusRecordsMock();
    bookStatusRecords.getNumberOfRecordsByStatus.mockReturnValueOnce(
      reservedByYouRecordsCount
    );
    const rule = new ReservedByYouBookRule(bookStatusRecords);

    const applies = rule.applies();

    expect(applies).toEqual(true);
  });

  test("should check that book status is not RESERVED_BY_YOU when there is no book reserved by logged in user", async () => {
    const reservedByYouRecordsCount = 0;
    const bookStatusRecords = BookStatusRecordsMock();
    bookStatusRecords.getNumberOfRecordsByStatus.mockReturnValueOnce(
      reservedByYouRecordsCount
    );
    const rule = new ReservedByYouBookRule(bookStatusRecords);

    const applies = rule.applies();

    expect(applies).toEqual(false);
  });
});
