/* eslint-disable react/jsx-wrap-multilines */
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import SetUtil from "../../../util/setUtil";
import BookReviewCheckboxLabel from "./CheckboxLabel";

export type CheckboxProps = {
  values: any[];
  label: string;
};

type Props = {
  checkboxes: CheckboxProps[];
  checkedValues: any[];
  setCheckedValues: Function;
};

const CheckboxGroup = ({
  checkboxes,
  checkedValues,
  setCheckedValues,
}: Props) => {
  const isChecked = (...values: any[]) =>
    SetUtil.isSubset(values, checkedValues);

  const toggleValues = (values: any[]) => {
    if (isChecked(...values)) {
      setCheckedValues(SetUtil.setDifference(checkedValues, values));
    } else {
      setCheckedValues([
        ...SetUtil.setDifference(checkedValues, values),
        ...values,
      ]);
    }
  };

  return (
    <FormGroup className="book-review-field">
      {checkboxes.map((checkbox) => (
        <FormControlLabel
          className="book-review-checkbox-field"
          control={
            <Checkbox
              checked={isChecked(...checkbox.values)}
              onChange={() => toggleValues(checkbox.values)}
            />
          }
          label={<BookReviewCheckboxLabel label={checkbox.label} />}
        />
      ))}
    </FormGroup>
  );
};

export default CheckboxGroup;
