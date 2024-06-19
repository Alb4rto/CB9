import styles from "./moviecard.module.scss";
const MovieCard = ({ title = "movie-title", imgUrl }) => {
  return (
    <div className={styles.movieCard}>
      <img
        src={`https://image.tmdb.org/t/p/w500${imgUrl}`}
        alt="movie-card-image"
      />
      <p>{title}</p>
    </div>
  );
};

export default MovieCard;
