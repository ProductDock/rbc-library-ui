import { rest } from "msw";
import { BooksFixture } from "./fixtures";

export const BOOKS_URL = `*/books`;

export const handlers = [

  rest.get(BOOKS_URL, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(BooksFixture))),

  rest.get(`${BOOKS_URL}/*`, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(BooksFixture.books[1]))),
];
