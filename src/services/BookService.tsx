import client from "./client";

export const fetchAllBooks = async () => client.get("/books");

export const countAllBooks = async () => client.get("/books/count");
