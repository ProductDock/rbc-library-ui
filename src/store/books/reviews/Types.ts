/* eslint-disable no-unused-vars */
import { BookReview } from "../details/Types";

export enum BookReviewFormVariant {
    CREATE = "CREATE",
    EDIT = "EDIT",
}

export interface IBookReviewContext {
    selectedReview: BookReview | null;
    showedReviewForm: boolean;
    formVariant: BookReviewFormVariant;
    addReview?: (bookId: number, review: BookReview) => Promise<any>;
    editReview?: (bookId: number, review: BookReview) => Promise<any>;
    selectReview?: (review: BookReview) => void;
    hideReviewForm?: () => void;
    showReviewForm?: (formVariant: BookReviewFormVariant) => void;
}
