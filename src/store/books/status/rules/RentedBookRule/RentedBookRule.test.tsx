import BookStatusRecordsMock from "../mocks/BookStatusRecordsMock";
import RentedBookRule from "./RentedBookRule";

describe("RentedBookRule", () => {
  test("should check is book status RENTED when all books are rented", async () => {
    const rentedRecordsCount = 2;
    const bookStatusRecords = BookStatusRecordsMock();
    bookStatusRecords.getNumberOfRecordsByStatus.mockReturnValueOnce(
      rentedRecordsCount
    );
    const rule = new RentedBookRule(bookStatusRecords);

    const applies = rule.applies();

    expect(applies).toEqual(true);
  });

  test("should check that book status is not RENTED when not all books are rented", async () => {
    const rentedRecordsCount = 1;
    const bookStatusRecords = BookStatusRecordsMock();
    bookStatusRecords.getNumberOfRecordsByStatus.mockReturnValueOnce(
      rentedRecordsCount
    );
    const rule = new RentedBookRule(bookStatusRecords);

    const applies = rule.applies();

    expect(applies).toEqual(false);
  });
});
