import BookStatusRecordsMock from "../mocks/BookStatusRecordsMock";
import RentedByYouBookRule from "./RentedByYouBookRule";

describe("RentedByYouBookRule", () => {
  test("should check is book status RENTED_BY_YOU when there is a book rented by logged in user", async () => {
    const rentedByYouRecordsCount = 1;
    const bookStatusRecords = BookStatusRecordsMock();
    bookStatusRecords.getNumberOfRecordsByStatus.mockReturnValueOnce(
      rentedByYouRecordsCount
    );
    const rule = new RentedByYouBookRule(bookStatusRecords);

    const applies = rule.applies();

    expect(applies).toEqual(true);
  });

  test("should check that book status is not RENTED_BY_YOU when there is no book rented by logged in user", async () => {
    const rentedByYouRecordsCount = 0;
    const bookStatusRecords = BookStatusRecordsMock();
    bookStatusRecords.getNumberOfRecordsByStatus.mockReturnValueOnce(
      rentedByYouRecordsCount
    );
    const rule = new RentedByYouBookRule(bookStatusRecords);

    const applies = rule.applies();

    expect(applies).toEqual(false);
  });
});
