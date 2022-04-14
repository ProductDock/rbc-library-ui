/* eslint-disable no-unused-vars */
export type Book = {
  id?: number;
  title: string;
  author: string;
  cover: string;
};

export interface IBookDetailsContext {
  book: Book | null;
  bookId: number | null;
  loading: boolean;
  error: string | null;
  setBookId?: (bookIdParam: number) => void;
}
