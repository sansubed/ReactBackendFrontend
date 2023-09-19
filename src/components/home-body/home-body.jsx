import styles from './home-body.module.css'
// Object destructuring
import React from 'react'
import { useState } from 'react'

console.log(React)

// Object destructuring
// const {  name, age } = {
//   name: 'Alex',
//   age: 30,
// }

// Array destructuring
// const [firstNumber] = [1, 2, 3, 4]

function HomeBody() {
  // Hook -> useState
  const numbers = [1990, 1995, 2000, 2004, 2007]
  const [state, setState] = useState(numbers)

  // numbeqrs variable -> React State

  return (
    <div className={styles.home}>
      {state.map((number, index) => (
        <div className={styles.item} key={index}>
          {number}
          <button
            onClick={() => {
              setState((prevState) => prevState.filter((clickNumber) => number !== clickNumber))
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  )
}

export default HomeBody
