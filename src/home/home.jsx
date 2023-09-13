import styles from './home.module.css'
// {} -> object destructuring syntax
import { displayName, displayCountryName, myName } from '../basic-js/variable-function'

// DRY -> Do not repeat yourself

function Home() {
  // location to write js
  return (
    <div className={styles.home}>
      <div>{displayName()}</div>
      <div>{displayCountryName()}</div>
      <div>{myName}</div>
    </div>
  )
}

// Rendering component -> <Home />
// Call (run) function -> displayName()

export default Home

// ./ -> if you are trying to import file which is in the same folder
// .. -> go back from current directory
