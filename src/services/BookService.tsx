import client from "./client";

export const fetchAllBooks = async (params: any) => client.get(`/books?pageNumber=${params}`);

export const countAllBooks = async () => client.get("/books/count");
