import { useRef } from "react";
import MovieCard from "../MovieCards/MovieCard";
import styles from "./carousel.module.scss";
import {
  PiArrowFatLineRightLight,
  PiArrowFatLineLeftLight,
} from "react-icons/pi";
const Carousel = ({ list = [] }) => {
  const carouselRef = useRef();
  const handleArrowClick = (type) => {
    if (type === `left`) {
      carouselRef.current.scroll({
        top: 0,
        left: carouselRef.current.scrollLeft - 200,
        behavior: "smooth",
      });
    } else {
      carouselRef.current.scroll({
        top: 0,
        left: carouselRef.current.scrollLeft + 200,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.arrowContainer}>
        <PiArrowFatLineLeftLight
          className={styles.Icon}
          onClick={() => {
            handleArrowClick("left");
          }}
        />
        <PiArrowFatLineRightLight
          className={styles.Icon}
          onClick={() => {
            handleArrowClick("right");
          }}
        />
      </div>
      <div ref={carouselRef} className={styles.carousel}>
        {list.map((movie, index) => {
          return (
            <MovieCard
              title={movie.original_title}
              imgUrl={movie.backdrop_path}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
