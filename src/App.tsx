import { useEffect, useState } from 'react'

const apiUrl = 'https://restcountries.com/v3.1/all'

function App() {
  const [countries, setCountries] = useState([])
  const [error, setError] = useState()

  console.log(error)

  useEffect(() => {
    // fetch(apiUrl)
    //   .then((res) => res.json())
    //   .then((data) => setCountries(data))
    //   .catch((error) => console.log('You got error!', error))
    console.log('before function')
    // Immediately Invoked Function Expression (IIFE)
    async function getCountries() {
      // 18 -> synchronous code
      console.log('Running async function')
      try {
        const res = await fetch(apiUrl)
        // 22 -> asynchronous code
        console.log('Got json response!')
        const data = await res.json()

        setCountries(data)
      } catch (e) {
        setError(e)
      }
    }

    getCountries()

    console.log('after function')
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
