import styles from './App.module.css'

function App() {
  return (
    <div>
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
  )
}

export default App
