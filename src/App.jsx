// Create App component

import Footer from "./footer/footer";
import Header from "./header/header";
import Home from "./home/home";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <div className={styles.home}> I am content in App</div>
      <Footer />
    </>
  );
}

export default App;
