import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header1}>Fire and Water</div>
          <a href="Home">Home</a>
          
    </header>
  );
}

export default Header;