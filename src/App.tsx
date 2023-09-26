import { useState } from 'react'
import Detail from './components/detail'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [country, setCountry] = useState('Nepal')
  console.log('Rendering App component')
  console.log('Value of isLoading', isLoading)

  function updateState() {
    console.log('Running')
    setIsLoading(true)
  }

  function updateCountry(newCountry) {
    setCountry(newCountry)
  }

  return (
    <div>
      {console.log('JSX of App component is Running')}
      <Detail loading={isLoading} update={updateState} updateCountry={updateCountry} />
      Value of country in App component: {country}
    </div>
  )
}

export default App
