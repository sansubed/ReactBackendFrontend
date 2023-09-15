import styles from "./header.module.css";

function Header() {
  // location to write js
  return (
    <div className={styles.header}>
      <div>Home</div>
      <div>Service</div>
      <div>Contact</div>
    </div>
  );
}

export default Header;
