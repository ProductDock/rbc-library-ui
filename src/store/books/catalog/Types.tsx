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
  rating: Rating;
};

export interface IBooksContext {
  recommendedBooks: Book[];
  recommendedBooksCount: number;
  books: Book[];
  allBooksCount: number;
  loading: boolean;
  error: string | null;
  page: number;
  topics: string[];
  searchText: string | undefined;
  setPage?: (pageNumber: number) => void;
  setSearchText?: (searchText: string) => void;
  setTopicFilter?: (topics: string[]) => void;
}
