import styles from './home-body.module.css'

function HomeBody() {
  // Array
  const names = ['Anil', 'Samyak', 'Manoj', 'Narayan', 'Madhav', 'Anil']

  // const objName = {
  //   name: 'Gorakh',
  //   favNumber: 7,
  // }

  const numbers = [1, 2, 3, 4]

  const mappedValue = numbers.map(function (number) {
    return number * 2 + 2
  })

  const divElement = (
    <div>
      <div>Hello World</div>
    </div>
  )
  console.log(divElement)

  console.log(mappedValue)

  // numbersMap is callback function
  // function numbersMap(name, index) {
  //   return (
  //     <div className={styles.item} key={index}>
  //       {name.toUpperCase()}
  //     </div>
  //   )
  // }

  // <div class="hello" id="anyId">Hello</div>

  const mappedNames = names.map(function (name, index) {
    return (
      <div className={styles.item} key={index}>
        {name.toUpperCase()}
      </div>
    )
  })

  // [
  //   ((
  //     <div className={styles.item} key={0}>
  //       ANIL
  //     </div>
  //   ),
  //   (
  //     <div className={styles.item} key={1}>
  //       SAMYAK
  //     </div>
  //   ),
  //   (
  //     <div className={styles.item} key={2}>
  //       MANOJ
  //     </div>
  //   ),
  //   (
  //     <div className={styles.item} key={3}>
  //       NARAYAN
  //     </div>
  //   ),
  //   (
  //     <div className={styles.item} key={4}>
  //       MADHAV
  //     </div>
  //   ),
  //   (
  //     <div className={styles.item} key={5}>
  //       ANIL
  //     </div>
  //   ))
  // ]

  console.log(mappedNames)

  return (
    <div className={styles.home}>
      {names.map(function (name, index) {
        return (
          <div className={styles.item} key={index}>
            {name.toUpperCase()}
          </div>
        )
      })}
    </div>
  )
}

export default HomeBody
