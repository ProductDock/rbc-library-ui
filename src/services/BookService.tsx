import qs from "qs";
import client from "./client";

export const fetchBooks = async (params: any) =>
  client.get(`/search`, {
    params,
    paramsSerializer: (param: any) =>
      qs.stringify(param, { arrayFormat: "repeat" }),
  });

export const getBook = async (bookId: number) =>
  client.get(`/catalog/books/${bookId}`);
