import styles from './home-body.module.css'

function HomeBody() {
  // Array
  const names = ['Anil', 'Samyak', 'Manoj', 'Narayan', 'Madhav', 'Anil']

  console.log(names)

  // numbersMap is callback function
  function numbersMap(name, index) {
    return (
      <div className={styles.item} key={index}>
        {name}
      </div>
    )
  }

  return <div className={styles.home}>{names.map(numbersMap)}</div>
}

export default HomeBody
