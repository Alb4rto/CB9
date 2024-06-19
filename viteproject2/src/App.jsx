import { useEffect, useState } from "react";
import styles from "./app.module.scss";
import HeroComponent from "./components/HeroComponents/HeroComponents";
import Navbar from "./components/Navbar/Navbar";
import { AUTH_KEY } from "../constants";
import MovieCard from "./components/MovieCards/MovieCard";
import Carousel from "./components/Carousel/Carousel";

function App() {
  const [popularList, setPopularList] = useState([]);
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${AUTH_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPopularList(data.results))
      .then(() => console.log(popularList));
  }, []);
  return (
    <main className={styles.maincontainer}>
      <Navbar />
      <HeroComponent
        imgUrl={popularList[0]?.backdrop_path}
        title={popularList[0]?.original_title}
      />
      <section className={styles.carouselSection}>
        <Carousel list={popularList} />
      </section>
    </main>
  );
}

export default App;
