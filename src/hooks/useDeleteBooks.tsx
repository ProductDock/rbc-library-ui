import * as bookService from "../services/BookService";

const useDeleteBooks = () => {
  const deleteBook = async (bookId: number) => {
    await bookService.deleteBook(bookId);
  };

  return {
    deleteBook,
  };
};

export default useDeleteBooks;
