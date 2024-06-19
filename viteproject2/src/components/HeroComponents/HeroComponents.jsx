import styles from "./hero.module.scss";
const HeroComponent = ({ imgUrl, title = "placeholder" }) => {
  console.log(title);
  return (
    <div className={styles.heroContainer}>
      <h2>{title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${imgUrl}`} alt="hero-img" />
      <button className={styles.heroBtn}>Discover more</button>
    </div>
  );
};
export default HeroComponent;
