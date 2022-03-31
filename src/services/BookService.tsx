import client from "./client";

export const fetchBooks = async (params: number) => client.get(`/books?page=${params}`);

export const countAllBooks = async () => client.get("/books/count");
