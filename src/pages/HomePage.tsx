import CreateMemberForm from "../components/CreateMemberForm";
import MemberList from "../components/MemberList";
import MemebersContextProvider from "../store/members/MembersContext";

const HomePage = () => {
  return (
    <MemebersContextProvider>
      <CreateMemberForm />
      <MemberList />
    </MemebersContextProvider>
  );
};

export default HomePage;
