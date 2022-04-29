import BookStatusRecords from "../../BookStatusRecords";
import { BookStatus } from "../../Types";
import AvailableBookRule from "./AvailableBookRule";

const setupMock = () => {
  const bookStatusRecords: jest.Mocked<BookStatusRecords> = {
    getNumberOfRecordsByStatus: jest.fn(),
    records: [],
    loggedInUserEmail: "example@productdock.com",
    getNumberOfAllBookRecords: jest.fn().mockImplementation(() => {
      return 2;
    }),
  };
  return bookStatusRecords;
};

describe("AvailableBookRule", () => {
  test("should check is book status AVAILABLE", async () => {
    const bookStatusRecords = setupMock();
    bookStatusRecords.getNumberOfRecordsByStatus
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(0);

    const rule = new AvailableBookRule(bookStatusRecords);
    const applies = rule.applies();
    expect(bookStatusRecords.getNumberOfRecordsByStatus).toHaveBeenCalledWith(
      BookStatus.AVAILABLE
    );
    expect(bookStatusRecords.getNumberOfRecordsByStatus).toHaveBeenCalledWith(
      BookStatus.RENTED_BY_YOU
    );
    expect(bookStatusRecords.getNumberOfRecordsByStatus).toHaveBeenCalledWith(
      BookStatus.RESERVED_BY_YOU
    );
    expect(applies).toEqual(true);
  });

  test("should check that book status is not AVAILABLE when book is available and rented by logged in user", async () => {
    const bookStatusRecords = setupMock();
    bookStatusRecords.getNumberOfRecordsByStatus
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(0);

    const rule = new AvailableBookRule(bookStatusRecords);
    const applies = rule.applies();
    expect(bookStatusRecords.getNumberOfRecordsByStatus).toHaveBeenCalledWith(
      BookStatus.AVAILABLE
    );
    expect(bookStatusRecords.getNumberOfRecordsByStatus).toHaveBeenCalledWith(
      BookStatus.RENTED_BY_YOU
    );
    expect(
      bookStatusRecords.getNumberOfRecordsByStatus
    ).not.toHaveBeenCalledWith(BookStatus.RESERVED_BY_YOU);
    expect(applies).toEqual(false);
  });

  test("should check that book status is not AVAILABLE when book is rented by logged in user", async () => {
    const bookStatusRecords = setupMock();
    bookStatusRecords.getNumberOfRecordsByStatus
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(0);

    const rule = new AvailableBookRule(bookStatusRecords);
    const applies = rule.applies();
    expect(bookStatusRecords.getNumberOfRecordsByStatus).toHaveBeenCalledWith(
      BookStatus.AVAILABLE
    );
    expect(
      bookStatusRecords.getNumberOfRecordsByStatus
    ).not.toHaveBeenCalledWith(BookStatus.RENTED_BY_YOU);
    expect(
      bookStatusRecords.getNumberOfRecordsByStatus
    ).not.toHaveBeenCalledWith(BookStatus.RESERVED_BY_YOU);
    expect(applies).toEqual(false);
  });
});
