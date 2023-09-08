import styles from "./header.module.css";
//create component or call it function declaration, arrow function or changing it to expression

function Header() {
  return <div className={styles.header}>I am the header.</div>;
}

export default Header;
