import styles from "./Vertical.module.scss";

const Vertical = ({ data }) => {
  return (
    <>
      <div className={styles.cardWrapper}>
        <h3 className={styles.userName}>{data.user.username}</h3>
        <div className={styles.photoDiv}>
          <img className={styles.card} src={data.urls.regular} alt="" />
        </div>
        <p className={styles.description}>{data.alt_description}</p>
      </div>
    </>
  );
};

export default Vertical;
