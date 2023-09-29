// api url -> https://restcountries.com/v3.1/all

const apiUrl = 'https://restcountries.com/v3.1/all'
const result = window.fetch(apiUrl)

// Promise
// Promise is object which holds the result of Asynchronous operation

// How to handle Promise
// 1. then method
// 2. async await

// console.log(result.then())
console.log('Before handling promise')
const output = result
  .then((res) => {
    console.log('Inside first then')
    return res.json()
  })
  .then((data) => console.log('Inside second then'))
  .catch((error) => console.log('You got error!', error))

console.log(output)
// Blocking code: Weather call stack blocked or not
// for (let i = 0; i < 100000; i++) {
//   console.log('Running in Loop')
// }

console.log('After handling promise')

function App() {
  return <div>App</div>
}

export default App

// const obj = {
//   anything: () => {
//     console.log('I am anything function')
//   },
//   name: 'Santona'
// }

// obj.anything()

// const numbers = [1, 2, 3, 4]

// console.log(numbers.map((number) => ))
