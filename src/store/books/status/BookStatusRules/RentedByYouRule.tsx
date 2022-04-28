/* eslint-disable class-methods-use-this */
import { Record } from "../../catalog/Types";

export default class RentedByYouBookRule {
  public applies(records: Record[], loggedInUserEmail: string): boolean {
    const rentals = records.filter((record) => record.status === "RENTED");
    const rentalsByLoggedInUser = rentals.filter(
      (rental) => rental.email === loggedInUserEmail
    ).length;
    if (rentalsByLoggedInUser > 0) {
      return true;
    }
    return false;
  }
}
