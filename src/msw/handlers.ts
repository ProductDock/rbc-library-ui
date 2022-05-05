import { rest } from "msw";
import { BooksFixture } from "./fixtures";

export const BOOKS_URL = `*/search`;
export const BOOK_DETAILS_URL = `*/catalog/books`;
export const RENTAL_RECORD_URL = `*/rental/record`;

export const handlers = [

  rest.get(BOOKS_URL, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(BooksFixture))),

  rest.get(`${BOOK_DETAILS_URL}/*`, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(BooksFixture.books[1]))),

  rest.post(RENTAL_RECORD_URL, (req, res, ctx) => res(ctx.status(200, "Mocked status"))),
];
