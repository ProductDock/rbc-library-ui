export const routes = {
  HOME: "/catalog",
  WELCOME: "/",
  BOOK_DETAILS: "/book-details/:bookId",
  BOOK_DETAILS_PATH: "/book-details",
  BOOK_DETAILS_QR: "/scanned-qr/:bookId",
} as const;
