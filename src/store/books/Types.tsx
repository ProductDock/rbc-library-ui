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
  book: Book | null;
  bookId: number;
  loading: boolean;
  error: string | null;
  page: number;
  topics: string[];
  setPage?: (pageNumber: number) => void;
  setTopicFilter?: (topics: string[]) => void;
  setBookId?: (bookId: number) => void;
}
