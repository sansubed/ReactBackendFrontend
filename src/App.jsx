<<<<<<< HEAD
//create app component

import Footer from "./footer/footer";
import Header from "./header/header";
import Home from "./home/home";

function App() {
=======
// Create App component

import Footer from './footer/footer'
import Header from './header/header'
import Home from './home/home'
import styles from './App.module.css'

function App() {
  // React Fragment: <></>

  // TODO
  // Box model for inline element
  // id for css module
>>>>>>> cb1ef8d554aebc498ea860451126b8609ee61ab2
  return (
    <>
      <Header />
      <Home />
<<<<<<< HEAD
      <Footer />
    </>
  );
=======
      <div className={styles.home}> I am content in App</div>
      <Footer />
    </>
  )
>>>>>>> cb1ef8d554aebc498ea860451126b8609ee61ab2
}

export default App;
