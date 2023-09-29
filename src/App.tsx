import { useEffect, useState } from 'react'

const apiUrl = 'https://restcountries.com/v3.1/all'

function App() {
  const [countries, setCountries] = useState([])

  console.log(countries)

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log('You got error!', error))
  }, [])

  return (
    <div>
      {countries.map((country, index) => (
        <div key={index}>
          <img src={country.flags.png} alt="" />
          <div> {country.name.common}</div>
        </div>
      ))}
    </div>
  )
}

export default App
