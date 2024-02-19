export const routes = {
  HOME: "/catalog",
  WELCOME: "/",
  BOOK_DETAILS: "/book-details/:bookId",
  BOOK_DETAILS_PATH: "/book-details",
  BOOK_DETAILS_QR: "/book-details-qr/:bookId",
  ADMIN_HOME: "/admin",
  ADMIN_BOOKS: "/admin/books",
  ADMIN_READERS: "/admin/readers",
} as const;
