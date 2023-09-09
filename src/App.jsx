// Create App component

import Footer from "./footer/footer";
import Header from "./header/header";
import Home from "./home/home";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Home />
      <div className={styles.home}> I am new content in App</div>
      <Footer />
    </div>
  );
}

export default App;
