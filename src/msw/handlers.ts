import { rest } from "msw";
import { BooksFixture, BooksDetailsFixture, SuggestedBooksFixture, UserInfoFixture, TopicsFixture } from "./fixtures";

export const BOOKS_URL = `*/search`;
export const BOOK_DETAILS_URL = `*/books`;
export const RENTAL_RECORD_URL = `*/rental/book/*/action`;
export const POST_BOOK_REVIEW_URL = `*/catalog/books/*/reviews`;
export const PUT_BOOK_REVIEW_URL = `*/catalog/books/*/reviews*`;
export const DELETE_BOOK_REVIEW_URL = `*/catalog/books/*/reviews*`;
export const SUGGESTED_BOOKS_URL = `*/search/suggestions*`;
export const USER_INFO_URL = `*/user-info`;
export const TOPICS_URL = `*/catalog/topics`;
export const POST_BOOK_URL = `*/catalog/books`;

export const handlers = [

  rest.get(USER_INFO_URL, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(UserInfoFixture))),

  rest.get(BOOKS_URL, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(BooksFixture))),

  rest.get(`${SUGGESTED_BOOKS_URL}`, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(SuggestedBooksFixture))),

  rest.get(`${BOOK_DETAILS_URL}/1`, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(BooksDetailsFixture[1]))),

  rest.get(`${BOOK_DETAILS_URL}/2`, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(BooksDetailsFixture[2]))),

  rest.get(`${BOOK_DETAILS_URL}/3`, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(BooksDetailsFixture[3]))),

  rest.get(`${BOOK_DETAILS_URL}/4`, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(BooksDetailsFixture[4]))),

  rest.get(`${BOOK_DETAILS_URL}/5`, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(BooksDetailsFixture[5]))),

  rest.get(`${BOOK_DETAILS_URL}/6`, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(BooksDetailsFixture[6]))),

  rest.post(RENTAL_RECORD_URL, (req, res, ctx) => res(ctx.status(200, "Mocked status"))),

  rest.post(`${POST_BOOK_REVIEW_URL}`, (req, res, ctx) => res(ctx.status(200, "Mocked status"))),

  rest.put(`${PUT_BOOK_REVIEW_URL}`, (req, res, ctx) => res(ctx.status(200, "Mocked status"))),

  rest.delete(`${DELETE_BOOK_REVIEW_URL}`, (req, res, ctx) => res(ctx.status(200, "Mocked status"))),

  rest.get(`${TOPICS_URL}`, (req, res, ctx) => res(ctx.status(200, "Mocked status"), ctx.json(TopicsFixture))),

  rest.post(`${POST_BOOK_URL}`, (req, res, ctx) => res(ctx.status(200, "Mocked status"))),
];
