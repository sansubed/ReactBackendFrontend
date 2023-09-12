import styles from './home.module.css'

// Variable and Value
// number (data type)
const myVariable = 123
// (immutable)

// string (data type)
let myCountry = 'Nepal'
// (mutable)
myCountry = 'USA'
myCountry = 'Canada'

const myName = 'Prakash'
// myName = 'Gorakh' (Error)

// if(condition) {
//   what to do if condition is matched?
// }

// function (3 ways)
// Function declaration
function displayName() {
  // conditional statement
  if (myName === 'Prakash') {
    return 'Prakash'
  }

  if (myName === 'Gorakh') {
    return 'Gorakh'
  }
}

function Home() {
  return <div className={styles.home}>{displayName()}</div>
}

// Rendering component -> <Home />
// Call (run) function -> displayName()

export default Home
