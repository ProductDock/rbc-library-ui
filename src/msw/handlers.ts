import { rest } from "msw";
import { BooksFixture } from "./fixtures";

export const URL = `*/books`;

export const handlers = [
  // Fetch books
  rest.get(URL, (req, res, ctx) => {
    // Respond with a 200 status code
    return res(ctx.status(200, "Mocked status"), ctx.json(BooksFixture));
  }),
];
