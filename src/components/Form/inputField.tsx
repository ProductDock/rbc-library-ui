import { ErrorMessage, Field } from "formik";
import { TextInputErrorMessage } from "./errorMessage";

export type FieldProps = {
  name: string;
  type: string;
  as: string;
  description: string;
  disabled: boolean;
};

const InputField = ({ name, type, as, description, disabled = false }: FieldProps) => {
  return (
    <>
      <label htmlFor={name}>{description}</label>
      {["input", "textarea"].includes(as) && (
        <Field name={name} type={type} as={as} placeholder={description} disabled={disabled} />
      )}

      <ErrorMessage name={name} component={TextInputErrorMessage} />
    </>
  );
};

export default InputField;
