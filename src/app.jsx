import { useState } from 'react'
import CountryDetail from './components/country-detail'

function App() {
  const [country, setCountry] = useState('Nepal')
  const [loading, setLoading] = useState(false)

  return (
    <div>
      value from country: {country}
      <br />
      value from country detail: <CountryDetail myCountry={country} isLoading={loading} />
    </div>
  )
}

export default App
