type Props = {
  firstName: string;
  lastName: string;
};

const MemberListItem = ({ firstName, lastName }: Props) => {
  return (
    <div>
      {firstName} {lastName}
    </div>
  );
};

export default MemberListItem;
