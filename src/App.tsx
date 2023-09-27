// functional component
function App() {
  // data types in JS
  // string, number, boolean, object, function, undefined

  // Type inference
  let name = 'Alex'
  name = 'Prakash'
  // name = [10,20]
  // name = {name: 'Alex'}
  // name = 100

  // Type annotation
  // let country: string
  // country = 'Nepal'
  // country = 'USA'
  // country = 100
  // country = ['Nepal', 'USA']

  // function print() {
  //   return [10, 20]
  // }

  let age: number | string = 30
  age = 'Thirty'
  age = 40
  age = 'Fifty'
  age = 50
  // age = null -> invalid type
  // age = [10, 20] -> invalid type
  // age = print() -> invalid type

  type ValidCountries = 'Nepal' | 'India' | 'USA'

  let country: ValidCountries = 'USA'
  country = 'India'
  // country = 'abcd'
  return (
    <div>
      {name}
      {country}
      {age}
    </div>
  )
}

export default App
