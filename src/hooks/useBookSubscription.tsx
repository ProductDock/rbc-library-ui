import * as bookService from "../services/BookService";

const useBookSubscription = (bookId: number) => {
  const subscribe = async () => {
    await bookService.postSubscription(bookId);
  };

  const unsubscribe = async () => {
    await bookService.deleteSubscription(bookId);
  };

  return {
    subscribe,
    unsubscribe,
  };
};

export default useBookSubscription;
