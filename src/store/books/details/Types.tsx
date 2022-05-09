import { Dispatch, SetStateAction } from "react";

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
  bookStatus: string;
  showedConfirmationModal: boolean;
  showedSuccessMessage: boolean;
  successMessage: string | null;
  setBookStatus?: Dispatch<SetStateAction<string>>;
  performAction?: () => void;
  hideConfirmationModal?: () => void;
}

export type BookActionModal = {
  title: string;
  description: string;
};

export type RentalRequest = {
  bookId: string;
  requestedStatus: string;
};
