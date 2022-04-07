import client from "./client";

export const fetchBooks = async (params: any) =>
  client.get(`/books`, { params });

export const countAllBooks = async () => client.get("/books/count");
