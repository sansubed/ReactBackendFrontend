import styles from './home-body.module.css'

function HomeBody() {
  // Array
  const names = ['Anil', 'Samyak', 'Manoj', 'Narayan', 'Madhav', 'Anil']

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
