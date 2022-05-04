import BookStatusRecords from "../../BookStatusRecords";

const BookStatusRecordsMock = () => {
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

export default BookStatusRecordsMock;
