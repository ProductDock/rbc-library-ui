import { BookRecommendations } from "../../../../../store/books/details/Types";
import { CheckboxProps } from "../CheckboxGroup";

class RecommendationCheckboxValues {
  static get = (): CheckboxProps[] => [
    {
      values: [
        BookRecommendations.JUNIOR,
        BookRecommendations.MEDIOR,
        BookRecommendations.SENIOR,
      ],
      label: "Select all",
    },
    { values: [BookRecommendations.JUNIOR], label: "Junior" },
    { values: [BookRecommendations.MEDIOR], label: "Medior" },
    { values: [BookRecommendations.SENIOR], label: "Senior" },
  ];
}
export default RecommendationCheckboxValues;
