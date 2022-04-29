import BookStatusRecords from "../../BookStatusRecords";
import { BookStatus } from "../../Types";
import RentedBookRule from "../RentedBookRule/RentedBookRule";

describe("RentedBookRule", () => {
  test("should check is book status RENTED", async () => {
    const bookStatusRecords: jest.Mocked<BookStatusRecords> = {
      getNumberOfRecordsByStatus: jest.fn().mockReturnValue(1),
      records: [],
      loggedInUserEmail: "example@productdock.com",
      getNumberOfAllBookRecords: jest.fn().mockReturnValue(1),
    };

    const rule = new RentedBookRule(bookStatusRecords);
    const applies = rule.applies();
    expect(bookStatusRecords.getNumberOfRecordsByStatus).toHaveBeenCalledWith(
      BookStatus.RENTED
    );
    expect(applies).toEqual(true);
  });

  test("should check that book status is not RENTED", async () => {
    const bookStatusRecords: jest.Mocked<BookStatusRecords> = {
      getNumberOfRecordsByStatus: jest.fn().mockReturnValue(0),
      records: [],
      loggedInUserEmail: "example@productdock.com",
      getNumberOfAllBookRecords: jest.fn().mockReturnValue(1),
    };

    const rule = new RentedBookRule(bookStatusRecords);
    const applies = rule.applies();
    expect(bookStatusRecords.getNumberOfRecordsByStatus).toHaveBeenCalledWith(
      BookStatus.RENTED
    );
    expect(applies).toEqual(false);
  });
});
