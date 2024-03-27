/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { BookActions, BookStatus } from "../status/Types";

export type DetailedRecord = {
  user: {
    fullName: string;
    image: string;
    email: string;
  };
  status: BookStatus;
  date: Date;
};

export type Rating = {
  score: number | undefined;
  count: number | undefined;
};

export enum BookRecommendations {
  JUNIOR = "JUNIOR",
  MEDIOR = "MEDIOR",
  SENIOR = "SENIOR",
}

export type Review = {
  userFullName: string;
  userId: string;
  rating: number;
  recommendation: BookRecommendations[];
  comment: string;
};

export type Topic = {
  id: number;
  name: string;
};

export type Book = {
  id?: number;
  title: string;
  author: string;
  cover: string;
  records: DetailedRecord[];
  numberOfCopies: number;
  reviews: Review[];
  rating: Rating;
  description: string;
  topics: Topic[];
  subscribed: boolean;
};

export type BookActionModal = {
  title: string;
  description: string;
};

export type RentalRequest = {
  rentalAction: BookActions;
};

export type BookReview = {
  comment: string | null;
  rating: number | null;
  recommendation: BookRecommendations[];
};
export interface IBookDetailsContext {
  book: Book | null;
  bookStatus: BookStatus | null;
  currentAction: BookActions | null;
  reloadBook?: () => void;
  setBookStatus?: Function;
  returnABook?: Function;
  rentABook?: Function;
  reserveABook?: Function;
  cancelBookReservation?: Function;
  addBookReview?: (review: BookReview) => Promise<any>;
  editBookReview?: (review: BookReview) => Promise<any>;
}
