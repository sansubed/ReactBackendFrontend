// Create App component

import Footer from "./footer/footer";
import Header from "./header/header";
import Home from "./home/home";

function App() {
  return (
    <>
      <Header />
      <Home />
      <div className={styles.home}> I am new content in App</div>
      <Footer />
    </>
  );
}

export default App;
