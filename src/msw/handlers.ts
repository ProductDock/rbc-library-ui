import { rest } from "msw";
import { BooksFixture, BookFixture, BookFixture2 } from "./fixtures";

export const BOOKS_URL = `*/books`;

export const handlers = [

  rest.get(BOOKS_URL, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(BooksFixture))),

  rest.get(`${BOOKS_URL}/count`, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(25))),

  rest.get(`${BOOKS_URL}/1`, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(BookFixture))),

  rest.get(`${BOOKS_URL}/2`, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(BookFixture2))),
];
