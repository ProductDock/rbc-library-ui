import qs from "qs";
import { RentalRequest, BookReview } from "../store/books/details/Types";
import client from "./client";

export const fetchBooks = async (params: any) =>
  client.get(`/search`, {
    params,
    paramsSerializer: (param: any) =>
      qs.stringify(param, { arrayFormat: "repeat" }),
  });

export const fetchSuggestedBooks = async (searchText: string) =>
  client.get(`/search/suggestions?searchText=${searchText}`);

export const getBook = async (bookId: number) => client.get(`/books/${bookId}`);

export const postRentalRequest = async (rentalRequest: RentalRequest) =>
  client.post("/rental/record", rentalRequest);

export const postBookReview = async (bookId: number, review: BookReview) =>
  client.post(`/catalog/books/${bookId}/reviews`, review);

export const putBookReview = async (
  bookId: number,
  review: BookReview,
  userId?: string
) =>
  client.put(
    `/catalog/books/${bookId}/reviews?k_book=${bookId}&k_user=${encodeURIComponent(
      userId || ""
    )}`,
    review
  );

export const deleteBookReview = async (bookId: number, userId?: string) =>
  client.delete(
    `/catalog/books/${bookId}/reviews?k_book=${bookId}&k_user=${encodeURIComponent(
      userId || ""
    )}`
  );
