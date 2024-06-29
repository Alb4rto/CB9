import styles from "../card/card.module.scss";

import { NavLink } from "react-router-dom";
const Card = ({ data }) => {
  return (
    <>
      <div className={styles.cardWrapper}>
        <NavLink to={`/modal/`}>
          <img className={styles.card} src={data.urls.regular} alt="" />
        </NavLink>
      </div>
    </>
  );
};

export default Card;
