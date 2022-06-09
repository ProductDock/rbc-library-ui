import { useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import { useBooksContext } from "../../../../store/books/catalog/BooksContext";
import BookCard from "../../../../components/BookCard";
import "react-multi-carousel/lib/styles.css";
import "./RecommendedBookCarousel.css";

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1600 },
    items: 5,
    slidesToSlide: 5,
    partialVisibilityGutter: 0,
  },
  smallDesktop: {
    breakpoint: { max: 1600, min: 1424 },
    items: 4,
    slidesToSlide: 4,
    partialVisibilityGutter: 0,
  },
  tablet: {
    breakpoint: { max: 1424, min: 1150 },
    items: 3,
    slidesToSlide: 3,
    partialVisibilityGutter: 0,
  },
  mediumTablet: {
    breakpoint: { max: 1150, min: 900 },
    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 0,
  },
  smallTablet: {
    breakpoint: { max: 900, min: 800 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 0,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 10,
  },
  bigMobile: {
    breakpoint: { max: 800, min: 600 },
    items: 3,
    slidesToSlide: 3,
    partialVisibilityGutter: 10,
  },
};

const RecommendedBookCarousel = () => {
  const { recommendedBooks, topics } = useBooksContext();

  const carouselRef = useRef<any>(null);

  useEffect(() => {
    if (carouselRef?.current?.previous) carouselRef.current.goToSlide(0);
  }, [topics]);

  return (
    <div className="carousel-padding" data-testid="recommendation-carousel">
      <Carousel
        ref={carouselRef}
        containerClass="carousel-container"
        partialVisible
        shouldResetAutoplay={false}
        draggable={false}
        swipeable
        autoPlay={false}
        removeArrowOnDeviceType={["mobile", "bigMobile"]}
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
