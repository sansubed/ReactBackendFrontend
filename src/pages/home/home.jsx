import { useState } from 'react'
import styles from './home.module.css'

// 🌙

function Home() {
  const [mode, setMode] = useState(true)

  // let mode = true

  console.log('Rendering Home')

  // falsy values
  // undefined, null, NaN, '', 0, false

  // ternary operator
  // mode ? styles.light : styles.dark
  // condition ? value_for_true_condition : value_for_false_condition

  return (
    <>
      <div className={mode ? styles.light : styles.dark}>
        <button onClick={() => setMode(!mode)} className={styles.modeIcon}>
          {mode ? '🌞' : '🌙'}
        </button>
      </div>
    </>
  )
}

export default Home
