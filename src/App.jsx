import styles from "./App.module.css"; //javascript

function App() {
  return (
    <div>
      {/* interpolistic: below is the jsx -> combination of java and html */}
      <header className={styles.header}>
        <h1>Header</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.centerBox}>
          <div className={styles.box}></div>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Footer</p>
      </footer>
    </div>
  );
}
export default App;
