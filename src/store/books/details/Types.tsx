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
  loading: boolean;
  error: string | null;
}
