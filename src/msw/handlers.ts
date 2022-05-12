import { rest } from "msw";
import { BooksFixture } from "./fixtures";

export const BOOKS_URL = `*/search`;
export const BOOK_DETAILS_URL = `*/catalog/books`;
export const RENTAL_RECORD_URL = `*/rental/record`;
export const BOOK_REVIEW_URL = `*/catalog/books/*/reviews`;

export const handlers = [

  rest.get(BOOKS_URL, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(BooksFixture))),

  rest.get(`${BOOK_DETAILS_URL}/1`, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(BooksFixture.books[1]))),

  rest.get(`${BOOK_DETAILS_URL}/2`, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(BooksFixture.books[2]))),

  rest.get(`${BOOK_DETAILS_URL}/3`, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(BooksFixture.books[3]))),

  rest.post(RENTAL_RECORD_URL, (req, res, ctx) => res(ctx.status(200, "Mocked status"))),

  rest.post(`${BOOK_REVIEW_URL}`, (req, res, ctx) => res(ctx.status(200, "Mocked status"))),

];
