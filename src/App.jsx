//Create App Component

import Footer from "./footer/footer";
import Header from "./header/header";
import Home from "./Home/home";

function App() {
  return (
    <>
      {/* you can either use react fragment or one div! One parent is must! */}
      <div>
        Hello App
        <Header />
        <Home />
        <Footer />
      </div>
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
