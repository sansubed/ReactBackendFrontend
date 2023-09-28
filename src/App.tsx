import { useEffect, useState } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const [catData, setCatData] = useState([])

  console.log(window)

  useEffect(() => {
    // Fetch data from database
    // https://api.thecatapi.com/v1/images/search
    // const cat = 'https://api.thecatapi.com/v1/images/search'

    // (response) => response.json() -> asynchronous code
    // (data) => data -> asynchronous code

    const promiseOne = fetch('https://api.thecatapi.com/v1/images/search')
    const promiseTwo = promiseOne.then((response) => response.json())
    promiseTwo.then((data) => {
      setCatData(data)
      setIsLoading(false)
    })
  }, [])

  // [] -> useEffect hook can only run once at the end
  return isLoading ? <div>Getting cat data...</div> : catData.map((cat) => <img key={cat.id} src={cat.url} />)
}

export default App
