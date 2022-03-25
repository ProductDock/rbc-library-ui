/* eslint-disable no-unused-vars */
export type Book = {
  id?: number;
  title: string;
  author: string;
  cover: string;
};

export interface IBooksContext {
  books: Book[];
  loading: boolean;
  error: string | null;
  findAllBooks?: () => void;
}
