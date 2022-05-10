import { BookStatus } from "../status/Types";

export type Record = {
  email: string;
  status: string;
};

export type Book = {
  id?: number;
  title: string;
  author: string;
  cover: string;
  records: Record[];
  numberOfCopies: number;
};

export interface IBookDetailsContext {
  book: Book | null;
  loading: boolean;
  error: string | null;
  bookStatus: BookStatus | null;
  showedSuccessMessage: boolean;
  successMessage: string | null;
  setBookStatus?: Function;
  performAction?: Function;
  showSuccessScreen?: () => void;
}

export type BookActionModal = {
  title: string;
  description: string;
};

export type RentalRequest = {
  bookId: string;
  requestedStatus: BookStatus | null;
};
