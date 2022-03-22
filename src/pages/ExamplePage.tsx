import CreateMemberForm from "../components/CreateMemberForm";
import MemebersContextProvider from "../store/members/MembersContext";

const ExamplePage = () => {
  return (
    <MemebersContextProvider>
      <CreateMemberForm />
    </MemebersContextProvider>
  );
};

export default ExamplePage;
