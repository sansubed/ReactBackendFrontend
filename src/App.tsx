// useEffect Hook
import { useEffect, useState } from 'react'

function App() {
  // Synchronous Code
  const [count, setCount] = useState(0)

  console.log('1. App component rendering started!')

  console.log(count)

  const callbackFn = () => {
    console.log('2. Running from useEffect callback function')
  }

  // Asynchronous Code
  // setInterval(() => {
  //   setCount((prevState) => prevState + 1)
  // }, 3000)

  // useEffect hook will run at the end of component rendering or re-rendering process
  useEffect(callbackFn)

  console.log('3. Running below useEffect hook call')

  return (
    <div>
      {console.log('4. Running inside JSX')}
      App
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount((prevState) => prevState + 1)
        }}
      >
        Update Number
      </button>
    </div>
  )
}

export default App
