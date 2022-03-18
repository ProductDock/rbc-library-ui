type Props = {
  title: string;
  numberOfBooks: number;
};

const SectionTitle = ({ title, numberOfBooks }: Props) => {
  return (
    <div className="title">
      {title} ({numberOfBooks})
    </div>
  );
};

export default SectionTitle;
