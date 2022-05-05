import { ObjectSchema, StringSchema } from "yup";
import { useMembersContext } from "../../store/members/MembersContext";
import DynamicForm from "../Form";
import { FieldProps } from "../Form/inputField";

const formFields: FieldProps[] = [
  {
    name: "firstName",
    description: "First name",
    type: "text",
    as: "input",
    disabled: false,
  },
  {
    name: "lastName",
    description: "Last name",
    type: "text",
    as: "input",
    disabled: false,
  },
];

const CreateMemberForm = () => {
  const { createMember } = useMembersContext();

  const handleSubmit = (values: any) => {
    createMember?.({ firstName: values.firstName, lastName: values.lastName });
  };
  return (
    <div className="container">
      <DynamicForm
        initialValues={{
          firstName: "",
          lastName: "",
        }}
        validationSchema={new ObjectSchema().shape({
          firstName: new StringSchema().required(),
          lastName: new StringSchema().required(),
        })}
        formFields={formFields}
        handleSubmit={handleSubmit}
        submitMessage="Submit"
      />
    </div>
  );
};

export default CreateMemberForm;
