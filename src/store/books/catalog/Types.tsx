/* eslint-disable no-unused-vars */
export type BookRentData = {
  user: string;
};

export type Book = {
  id?: number;
  title: string;
  author: string;
  cover: string;
  rents: BookRentData[];
};

export interface IBooksContext {
  books: Book[];
  allBooksCount: number;
  loading: boolean;
  error: string | null;
  page: number;
  topics: string[];
  setPage?: (pageNumber: number) => void;
  setTopicFilter?: (topics: string[]) => void;
}
