import { BookActions, BookStatus } from "../status/Types";

export type Record = {
  email: string;
  status: string;
};

export type Review = {
  id: string;
  userFullName: string;
  rating: number;
  recommendation: string[];
  comment: string;
};

export type Book = {
  id?: number;
  title: string;
  author: string;
  cover: string;
  records: Record[];
  numberOfCopies: number;
  reviews: Review[];
};

export interface IBookDetailsContext {
  book: Book | null;
  bookStatus: BookStatus | null;
  reloadBook?: () => void;
  setBookStatus?: Function;
  returnABook?: Function;
  rentABook?: Function;
  showSuccessScreen?: () => void;
}

export type BookActionModal = {
  title: string;
  description: string;
};

export type RentalRequest = {
  bookId: string;
  requestedStatus: BookActions | null;
};
