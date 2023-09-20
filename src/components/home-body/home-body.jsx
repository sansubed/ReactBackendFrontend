import styles from './home-body.module.css'

import { useState } from 'react'

function HomeBody() {
  const [numbers, setNumber] = useState([1990, 2000, 2015, 2020])

  console.log('Running Home Body')

  // setNumber((prevState) => prevState.filter((clickNumber) => 1990 !== clickNumber))

  return (
    <section className={styles.home}>
      {numbers.map((number, index) => (
        <div className={styles.item} key={index}>
          {number}
          <button
            onClick={() => {
              setNumber((prevState) => prevState.filter((clickNumber) => number !== clickNumber))
            }}
          >
            X
          </button>
        </div>
      ))}
    </section>
  )
}

export default HomeBody

// When state updated in React component (setNumber), that react component will re-render
