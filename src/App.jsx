//Create App Component

import Footer from "./footer/footer";
import Header from "./header/header";
import Home from "./home/home";
import styles from "./app.module.css";

// Create App component

import Footer from "./footer/footer";
import Header from "./header/header";
import Home from "./home/home";
import styles from "./App.module.css";

function App() {
  return (
    <>
      {/* you can either use react fragment or one div! One parent is must! */}
      <div>
        <Header />
        <Home />
        <div className={styles.box}>I am the App</div>
        <Footer />
      </div>
    </>
  );
  // React Fragment: <></>

  // TODO
  // Box model for inline element
  // id for css module
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

// import styles from "./App.module.css"; //javascript
// const myVariable = "Hello World";
// function App() {
//   //React Fragment is used to creare the empty tag, <></> if you do not want to create extra element
//   return (
//     <>
//       <h1>{myVariable}</h1>
//       <div className={styles.box}>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nulla
//         nostrum. Rem eum praesentium eligendi labore ex, optio, quidem ea ipsa
//         provident laborum harum dignissimos veritatis, necessitatibus unde
//         ratione obcaecati!
//       </div>
//     </>
//   );
// }
// export default App;
