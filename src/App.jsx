// Create App component

import Footer from "./footer/footer";
import Header from "./header/header";
import Home from "./home/home";
import styles from "./app.module.css";
function App() {
  return (
    <>
      <Header />
      <Home />
      <div className={styles.app}></div>

      <Footer />
    </>
  );
}

export default App;
