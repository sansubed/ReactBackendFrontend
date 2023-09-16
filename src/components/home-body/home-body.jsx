import styles from './home-body.module.css'
import { useState } from 'react'

function HomeBody() {
  const [state, setState] = useState([1990, 1995, 2000, 2004, 2007, 2007])

  // const state = [1990, 1995, 2000, 2004, 2007, 2007]

  // console.log(setState())

  // [1990, 1995, 2000, 2004, 2007, 2007]
  // [2000]

  console.log(state)

  return (
    <div className={styles.home}>
      {/* Optional Chaining Operator */}

      {state?.map((date, i) => (
        // onClick: event
        <div className={styles.item} key={i}>
          {date}

          <button
            onClick={function () {
              console.log('You clicked date:', date, i)
              setState((prevState) => prevState.filter((clickedDate) => clickedDate !== date))
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
