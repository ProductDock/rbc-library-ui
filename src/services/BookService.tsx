import client from "./client";

export const fetchAllBooks = async () => client.get("/books");
