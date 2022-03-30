import client from "./client";

export const fetchAllBooks = async (params: any) => client.get(`/books?page=${params}`);

export const countAllBooks = async () => client.get("/books/count");
