import { rest } from "msw";
import { BooksFixture, SuggestedBooksFixture } from "./fixtures";

export const BOOKS_URL = `*/search`;
export const SUGGESTED_BOOKS_URL = `*/search/suggestions*`;
export const BOOK_DETAILS_URL = `*/books`;
export const RENTAL_RECORD_URL = `*/rental/record`;
export const POST_BOOK_REVIEW_URL = `*/catalog/books/*/reviews`;
export const PUT_BOOK_REVIEW_URL = `*/catalog/books/*/reviews*`;
export const DELETE_BOOK_REVIEW_URL = `*/catalog/books/*/reviews*`;

export const handlers = [

  rest.get(BOOKS_URL, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(BooksFixture))),

  rest.get(SUGGESTED_BOOKS_URL, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(SuggestedBooksFixture))),

  rest.get(`${BOOK_DETAILS_URL}/1`, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(BooksFixture.books[1]))),

  rest.get(`${BOOK_DETAILS_URL}/2`, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(BooksFixture.books[2]))),

  rest.get(`${BOOK_DETAILS_URL}/3`, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(BooksFixture.books[3]))),

  rest.get(`${BOOK_DETAILS_URL}/4`, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(BooksFixture.books[4]))),

  rest.post(RENTAL_RECORD_URL, (req, res, ctx) => res(ctx.status(200, "Mocked status"))),

  rest.post(`${POST_BOOK_REVIEW_URL}`, (req, res, ctx) => res(ctx.status(200, "Mocked status"))),

  rest.put(`${PUT_BOOK_REVIEW_URL}`, (req, res, ctx) => res(ctx.status(200, "Mocked status"))),

  rest.delete(`${DELETE_BOOK_REVIEW_URL}`, (req, res, ctx) => res(ctx.status(200, "Mocked status"))),
];
