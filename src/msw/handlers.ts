import { rest } from "msw";
import { BooksFixture } from "./fixtures";

export const BOOKS_URL = `*/search`;
export const BOOK_DETAILS_URL = `*/catalog/books`;

export const handlers = [

  rest.get(BOOKS_URL, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(BooksFixture))),

  rest.get(`${BOOK_DETAILS_URL}/*`, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(BooksFixture.books[1]))),
];
