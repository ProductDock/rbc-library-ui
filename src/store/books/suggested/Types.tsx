/* eslint-disable no-unused-vars */
export type SuggestedBook = {
  id?: number;
  title: string;
  author: string;
  recommended: boolean;
  notFound?: boolean;
};

export interface ISuggestedBooksContext {
  suggestedBooks: SuggestedBook[];
  error: string | null;
  findSuggestedBooks?: (searchText: string) => void;
  clearSuggestedBooks?: (totalClear?: boolean) => void;
}
