/* eslint-disable no-unused-vars */
export interface Book {
  id?: number;
  title: string;
  author: string;
  cover?: string;
}

export interface IBooksContext {
  books: Book[];
  loading: boolean;
  error: string | null;
  findAllBooks?: () => void;
}
