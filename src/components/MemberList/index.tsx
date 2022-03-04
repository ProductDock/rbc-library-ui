import { useEffect } from "react";
import { useMembersContext } from "../../store/members/MembersContext";
import MemberListItem from "./MemberListItem";

const MemberList = () => {
  const { members, findAllMembers } = useMembersContext();

  useEffect(() => {
    findAllMembers?.();
  }, []);
  return (
    <>
      {members.map((member) => (
        <MemberListItem key={member.id} firstName={member.firstName} lastName={member.lastName} />
      ))}
    </>
  );
};

export default MemberList;
