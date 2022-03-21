import BookCard from "../components/BookCard";

const TestPage = () => {
  return (
    <div>
      <BookCard
        title="Book title"
        author="John Doe"
        imageUrl="https://www.oreilly.com/library/view/java-program-design/9781484241431/images/978-1-4842-4143-1_CoverFigure.jpg"
      />
      <BookCard
        title="Book2"
        author="John Doe"
        imageUrl="https://s3.us-east-2.amazonaws.com/shulph-dev-shelf/books/covers/9781789130690.jpg"
      />
    </div>
  );
};

export default TestPage;
