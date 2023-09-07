// Create App component

import Footer from "./footer/footer";
import Header from "./header/header";
import Home from "./home/home";

function App() {
  // React Fragment: <></>

  // TODO
  // Box model for inline element
  // id for css module
  return (
    <>
      <Header />
      <div>Hello App</div>
      <Home />
      <Footer />
    </>
  );
}

export default App;
