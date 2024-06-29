import styles from "./modal.module.scss";
import Vertical from "../verticalList/Vertical";
import { globalContext } from "../Layout/Layout";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const Modal = () => {
  const { cardList } = useContext(globalContext);
  return (
    <>
      <NavLink to={`/`}>
        <h3>back</h3>
      </NavLink>
      <div className={styles.Modal}>
        {cardList.map((photo, index) => (
          <Vertical data={photo} key={index} />
        ))}
      </div>
    </>
  );
};

export default Modal;
