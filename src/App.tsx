// useEffect Hook

import { useEffect } from 'react'

function App() {
  useEffect(() => {
    console.log('Running from useEffect callback function')
  }, [])

  // const [state, setState] = useState('Nepal')
  return <div>App</div>
}

export default App

// No input, Output
// function add() {
//   const a = 10
//   const b = 20
//   return a + b
// }

// const result = add()

// input, Output
// function add(a: number, b: number) {
//   return a + b
// }

// const result = add(10, 20.25)

// let age
// console.log(age)

// No input, No output
// function add() {
//   const a = 10
//   const b = 20
//   console.log(a, b)
// }

// const result = add()
// console.log(result)

// Input, No output
// function add(a: number, b: number) {
//   console.log(a, b)
// }

// const result = add(20, 30)
