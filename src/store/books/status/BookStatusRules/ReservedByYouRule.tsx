/* eslint-disable class-methods-use-this */
import { Record } from "../../catalog/Types";

export default class ReservedByYouBookRule {
  public applies(records: Record[], loggedInUserEmail: string): boolean {
    const reservations = records.filter(
      (record) => record.status === "RESERVED"
    );
    const reservationsByLoggedInUser = reservations.filter(
      (reservation) => reservation.email === loggedInUserEmail
    ).length;
    if (reservationsByLoggedInUser > 0) {
      return true;
    }
    return false;
  }
}
