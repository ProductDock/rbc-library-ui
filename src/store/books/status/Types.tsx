/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

export interface Rule {
  applies(): boolean;
}

export enum BookStatus {
  AVAILABLE = "AVAILABLE",
  RENTED = "RENTED",
  RESERVED = "RESERVED",
  RENTED_BY_YOU = "RENTED_BY_YOU",
  RESERVED_BY_YOU = "RESERVED_BY_YOU",
}

export enum BookActions {
  RETURN = "RETURN",
  RENT = "RENT",
  RESERVE = "RESERVE",
  CANCEL_RESERVATION = "CANCEL_RESERVATION",
}
