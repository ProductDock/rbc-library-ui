import { Form, Formik } from "formik";
import { renderError } from "./errorMessage";
import InputField, { FieldProps } from "./inputField";

type Props = {
  initialValues: object;
  validationSchema: object;
  // eslint-disable-next-line no-unused-vars
  handleSubmit: (values: any, actions: any) => void;
  formFields: FieldProps[];
  submitMessage: string;
  errorMessage?: string;
  children?: any;
};

const DynamicForm = ({
  initialValues,
  validationSchema,
  handleSubmit,
  formFields,
  submitMessage,
  children,
  errorMessage,
  ...rest
}: Props) => {
  return (
    <Formik {...rest} initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        {children}

        {formFields.map((formField) => (
          <InputField
            key={formField.name}
            name={formField.name}
            description={formField.description}
            type={formField.type}
            as={formField.as}
            disabled={formField.disabled}
          />
        ))}

        {renderError(errorMessage)}

        <div>
          <button className="submit-button" type="submit">
            {submitMessage}
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default DynamicForm;
