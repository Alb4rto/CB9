import Card from "../card/Card";
import styles from "./cards.module.scss";
const Cards = ({ list }) => {
  return (
    <div className={styles.Cards}>
      {list.map((photo, index) => (
        <Card data={photo} key={index} />
      ))}
    </div>
  );
};

export default Cards;
