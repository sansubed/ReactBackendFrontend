// Create App component

import Footer from './footer/footer'
import Header from './header/header'
import Home from './home/home'

function App() {
  // array in JS
  const countryArr = ['USA', 'India', 'Nepal', 'Canada']

  console.log(countryArr)

  const countryObj = {
    currentCountry: 'USA',
    homeCountry: 'Nepal',
    futureCountry: 'Canada',
  }

  console.log(countryObj)
  return (
    <div>
      <Header />
      <Home />
      {countryArr[3]}
      {countryArr.length}
      {countryObj.homeCountry}
      <Footer />
    </div>
  )
}

export default App
