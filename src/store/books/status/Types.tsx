/* eslint-disable no-unused-vars */
export type Record = {
  email: string;
  status: string;
};

export interface IBookStatusContext {
  records: Record[];
  numberOfCopies: number;
  isBookAvailable: boolean;
  bookRentedByLoggedInUser: boolean;
  loading: boolean;
  error: string | null;
  setIsBookAvailable?: (isBookAvailable: boolean) => void;
  setBookRentedByLoggedInUser?: (bookRentedByLoggedInUser: boolean) => void;
}
