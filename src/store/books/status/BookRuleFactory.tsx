import AvailableBookRule from "./BookStatusRules/AvailableBookRule";
import RentedBookRule from "./BookStatusRules/RentedBookRule";
import ReservedBookRule from "./BookStatusRules/ReservedBookRule";
import { Rule } from "./Types";

export default class BookRuleFactory {
  public static for = (status: string): Rule => {
    switch (status) {
      case "AVAILABLE":
        return new AvailableBookRule();
      case "RENTED":
        return new RentedBookRule();
      case "RESERVED":
        return new ReservedBookRule();
      default:
        return new AvailableBookRule();
    }
  };
}
