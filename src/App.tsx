import { useEffect, useState } from 'react'
import { getCountries } from './api'

function App() {
  const [countries, setCountries] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    // fetch(apiUrl)
    //   .then((res) => res.json())
    //   .then((data) => setCountries(data))
    //   .catch((error) => console.log('You got error!', error))
    console.log('before function')
    // Immediately Invoked Function Expression (IIFE)

    // async function fetchCountry() {
    //   setCountries(await getCountries())
    // }
    getCountries().then((res) => setCountries(res))

    // fetchCountry()
  }, [])

  return error ? (
    <div>{error.message}</div>
  ) : (
    countries.map((country, index) => (
      <div key={index}>
        <img src={country.flags.png} alt="" />
        <div> {country.name.common}</div>
      </div>
    ))
  )
}

export default App
