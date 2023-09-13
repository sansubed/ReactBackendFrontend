// Variable and Value
// number (data type)
export const myVariable = 123
// (immutable)

// string (data type)
let myCountry = 'Nepal'
// (mutable)
myCountry = 'USA'
myCountry = 'Canada'

export const myName = 'Prakash'
// myName = 'Gorakh' (Error)

// if(condition) {
//   what to do if condition is matched?
// }

// function (3 ways)
// Function declaration
export function displayName() {
  // conditional statement
  if (myName === 'Prakash') {
    return 'Prakash'
  }

  if (myName === 'Gorakh') {
    return 'Gorakh'
  }
}

// named export
export function displayCountryName() {
  return 'Nepal'
}

// export default displayName
