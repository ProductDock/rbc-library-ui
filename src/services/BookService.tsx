import qs from "qs";
import { RentalRequest, BookReview } from "../store/books/details/Types";
import { NewBook } from "../store/books/new/Types";
import client from "./client";

export const fetchBooks = async (params: any) =>
  client.get(`/search`, {
    params,
    paramsSerializer: (param: any) =>
      qs.stringify(param, { arrayFormat: "repeat" }),
  });

export const fetchSuggestedBooks = async (params: any) =>
  client.get(`/search/suggestions`, { params });

export const getBook = async (bookId: number) => client.get(`/books/${bookId}`);

export const postRentalRequest = async (
  bookId: number,
  rentalRequest: RentalRequest
) => client.post(`/rental/book/${bookId}/action`, rentalRequest);

export const postBookReview = async (bookId: number, review: BookReview) =>
  client.post(`/catalog/books/${bookId}/reviews`, review);

export const putBookReview = async (
  bookId: number,
  review: BookReview,
  userId?: string
) =>
  client.put(
    `/catalog/books/${bookId}/reviews/${encodeURIComponent(userId || "")}`,
    review
  );

export const deleteBookReview = async (bookId: number, userId?: string) =>
  client.delete(
    `/catalog/books/${bookId}/reviews/${encodeURIComponent(userId || "")}`
  );

export const fetchTopics = async () => client.get(`/catalog/topics`);

export const postBook = async (book: NewBook) =>
  client.post(`/catalog/books`, book);

export const deleteBook = async (bookId: number) =>
  client.delete(`catalog/books/${bookId}`);
