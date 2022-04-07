/* eslint-disable no-unused-vars */
export type Book = {
  id?: number;
  title: string;
  author: string;
  cover: string;
};

export interface IBooksContext {
  books: Book[];
  allBooksCount: number;
  loading: boolean;
  error: string | null;
  page: number;
  setPage?: (pageNumber: number) => void;
  countAllBooks?: () => void;
}
