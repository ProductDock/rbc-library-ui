/* eslint-disable no-unused-vars */
export type Record = {
  email: string;
  status: string;
};

export type Rating = {
  score: number | undefined;
  count: number | undefined;
};

export type Book = {
  id?: number;
  title: string;
  author: string;
  cover: string;
  records: Record[];
  numberOfCopies: number;
  rating: Rating;
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
