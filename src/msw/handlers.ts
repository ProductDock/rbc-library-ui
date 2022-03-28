import { rest } from "msw";

export const URL = `*/books`;

export const handlers = [
  // Fetch books
  rest.get(URL, (req, res, ctx) => {
    // Respond with a 200 status code
    return res(
      ctx.status(200, "Mocked status"),
      ctx.json([
        { id: 1, author: "Pera Peric", cover: "Cover", title: "Book title" },
        {
          id: 2,
          author: "Nikola Peric",
          cover: "Cover1",
          title: "Book title1",
        },
        { id: 3, author: "Milan Peric", cover: "Cover2", title: "Book title2" },
        { id: 4, author: "Petar Peric", cover: "Cover3", title: "Book title3" },
      ])
    );
  }),
];
