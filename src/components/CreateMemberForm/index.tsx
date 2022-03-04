/* eslint-disable no-unused-vars */
import * as Yup from "yup";
import { useMembersContext } from "../../store/members/MembersContext";
import DynamicForm from "../Form";
import { FieldProps } from "../Form/inputField";

const formFields: FieldProps[] = [
  { name: "firstName", description: "First name", type: "text", as: "input", disabled: false },
  { name: "lastName", description: "Last name", type: "text", as: "input", disabled: false },
];

const CreateMemberForm = () => {
  const { createMember } = useMembersContext();

  const handleSubmit = (values: any, actions: any) => {
    createMember?.({ firstName: values.firstName, lastName: values.lastName });
  };
  return (
    <div className="container">
      <DynamicForm
        initialValues={{
          firstName: "",
          lastName: "",
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required(),
          lastName: Yup.string().required(),
        })}
        formFields={formFields}
        handleSubmit={handleSubmit}
        submitMessage="Submit"
      />
    </div>
  );
};

export default CreateMemberForm;
