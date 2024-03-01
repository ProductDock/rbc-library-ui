import { useEffect, useState } from "react";
import * as bookService from "../../../services/BookService";

const useBooks = (page: number) => {
  const [books, setBooks] = useState();
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const findBooks = async () => {
      setLoading(true);
      await bookService
        .fetchBooks({ page })
        .then((resp) => {
          setBooks(resp.data.books);
          setCount(resp.data.count);
        })
        .catch(() => setError("Error while fetching data"));
      setLoading(false);
    };

    findBooks();
  }, [page]);

  const deleteBook = async (bookId: number) => {
    await bookService.deleteBook(bookId);
  };

  return {
    books,
    count,
    loading,
    error,
    deleteBook,
  };
};

export default useBooks;
