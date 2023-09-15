import styles from "./home-body.module.css";

function HomeBody() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className={styles.home}>
      {numbers.map((number, index) => (
        <div className={styles.item} key={index}>
          {number}
        </div>
      ))}
    </div>
  );
}

export default HomeBody;
