/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { Record } from "../catalog/Types";

export interface Rule {
  applies(records: Record[]): boolean;
}

export interface LoggedInUserPerspective {
  showStatus(records: Record[]): string;
}

export enum BookStatus {
  AVAILABLE = "AVAILABLE",
  RENTED = "RENTED",
  RESERVED = "RESERVED",
  // RENTED_BY_YOU = "RENTED_BY_YOU",
  // RESERVED_BY_YOU = "RESERVED_BY_YOU",
}
