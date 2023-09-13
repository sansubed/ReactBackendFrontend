import styles from './footer.module.css'

function Footer() {
  // console.log(calcAge())
  // function declaration (hoisted)
  // function calcAge() {
  //   return 30
  // }

  // function expression (Not hoisted)
  // birthDate -> parameter for calcAge function
  const calcAge = function (birthDate) {
    const age = 2023 - birthDate

    // if you don't write return statement in function
    // by default it will return undefined

    return age
  }

  console.log(calcAge(2000))

  // arrow function (Not hoisted)
  // const calcAge = () => {
  //   return 30
  // }

  // Hoisting in JavaScript
  // console.log(country)

  // const country = 'Nepal'

  // create calcAge function -> return age 30
  // invoke, call function after Footer text

  // 1990 is argument for calcAge function
  return <div className={styles.footer}>Footer {calcAge(1990)}</div>
}

export default Footer
