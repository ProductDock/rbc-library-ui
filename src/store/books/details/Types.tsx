export type Book = {
  id?: number;
  title: string;
  author: string;
  cover: string;
  rentals: string[];
  numberOfCopies: number;
};

export interface IBookDetailsContext {
  book: Book | null;
  loading: boolean;
  error: string | null;
}
