// Create App component

import Footer from "./footer/footer";
import Header from "./header/header";
import Home from "./home/home";
import styles from "./App.module.css";

function App() {
  // React Fragment: <></>

  // TODO
  // Box model for inline element
  // id for css module
  return (
    <div className={styles.container}>
      <Header />
      <Home />
      <div className={styles.home}> I am content in App</div>
      <Footer />
    </div>
  );
}

export default App;
