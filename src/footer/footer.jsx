import styles from "./footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.column}>
          <h2>Contact Us</h2>
          <p>Email: contact@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <a href="#">Facebook</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;