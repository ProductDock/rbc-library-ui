import client from "./client";

export const fetchReviews = async (bookId: number) =>
  client.get(`/reviews/${bookId}`);
