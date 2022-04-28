export type Book = {
  id?: number;
  title: string;
  author: string;
  cover: string;
};

export interface IBookDetailsContext {
  book: Book | null;
  loading: boolean;
  error: string | null;
  showedConfirmationModal: boolean;
  showedSuccessMessage: boolean;
  rentABook?: () => void;
  hideConfirmationModal?: () => void;
}
