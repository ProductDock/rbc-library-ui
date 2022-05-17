/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { BookActions, BookStatus } from "../status/Types";

export type Record = {
  email: string;
  status: string;
};

export type Review = {
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

export type BookActionModal = {
  title: string;
  description: string;
};

export type RentalRequest = {
  bookId: string;
  requestedStatus: BookActions | null;
};

export enum BookRecommendations {
  JUNIOR = "JUNIOR",
  MEDIOR = "MEDIOR",
  SENIOR = "SENIOR",
}

export type BookReview = {
  comment: string | null;
  rating: number | null;
  recommendation: BookRecommendations[];
};
export interface IBookDetailsContext {
  book: Book | null;
  bookStatus: BookStatus | null;
  reloadBook?: () => void;
  setBookStatus?: Function;
  returnABook?: Function;
  rentABook?: Function;
  reviewBook?: (review: BookReview) => Promise<any>;
}
