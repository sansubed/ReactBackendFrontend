// Create App component

import Footer from './footer/footer'
import Header from './header/header'
import Home from './home/home'

function App() {
  const country = 'Nepal'
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
