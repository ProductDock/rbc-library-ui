import Carousel from "react-multi-carousel";
import { useBooksContext } from "../../../../store/books/catalog/BooksContext";
import BookCard from "../../../../components/BookCard";
import "react-multi-carousel/lib/styles.css";
import "./RecommendedBookCarousel.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
    slidesToSlide: 5,
    partialVisibilityGutter: 20,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1424 },
    items: 5,
    slidesToSlide: 5,
    partialVisibilityGutter: 20,
  },
  tablet: {
    breakpoint: { max: 1424, min: 800 },
    items: 3,
    slidesToSlide: 1,
    partialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 10,
  },
};

const RecommendedBookCarousel = () => {
  const { recommendedBooks } = useBooksContext();

  return (
    <div className="carousel-padding" data-testid="recommendation-carousel">
      <Carousel
        containerClass="carousel-container"
        partialVisible
        shouldResetAutoplay={false}
        draggable={false}
        swipeable
        autoPlay={false}
        removeArrowOnDeviceType={["mobile"]}
        responsive={responsive}
        renderArrowsWhenDisabled
      >
        {recommendedBooks.map((book) => {
          return (
            <BookCard
              key={book.id}
              bookId={book.id}
              title={book.title}
              author={book.author}
              cover={book.cover}
              records={book.records}
              rating={book.rating?.score}
              ratingsCount={book.rating?.count}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default RecommendedBookCarousel;
