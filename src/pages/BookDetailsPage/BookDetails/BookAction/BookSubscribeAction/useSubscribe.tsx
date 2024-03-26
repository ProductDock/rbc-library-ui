import { useEffect, useState } from "react";
import * as bookService from "../../../../../services/BookService";

const useSubscribe = (bookId: number) => {
  const [isSubscribed, setSubscribed] = useState<boolean>();

  const getSubscription = async () => {
    await bookService.getSubscription(bookId).then((resp) => {
      setSubscribed(resp.data);
    });
  };

  const subscribe = async () => {
    await bookService.postSubscribe(bookId);
  };

  const unsubscribe = async () => {
    await bookService.postUnsubscribe(bookId);
  };

  useEffect(() => {
    getSubscription();
  }, [bookId]);

  return {
    getSubscription,
    subscribe,
    unsubscribe,
    isSubscribed,
  };
};

export default useSubscribe;
