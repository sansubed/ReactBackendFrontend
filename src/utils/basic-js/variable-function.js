// Variable and Value
// number (data type)
export const myVariable = 123
// (immutable)

// string (data type)
// let myCountry = 'Nepal'
// (mutable)
// myCountry = 'USA'
// myCountry = 'Canada'

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

const country = 'Nepal'
// Global Scope

// named export
// Function scope
export function displayCountryName() {
  // const newCountry = 'USA'
  return country
}

const age = 30
// Block scope
if (country === 'Nepal') {
  console.log(age)
  console.log(country)
  // console.log(newCountry)
}

// export default displayName
