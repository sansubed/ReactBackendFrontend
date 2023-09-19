import styles from './home-body.module.css'
import { useState } from 'react'

function HomeBody() {
  const [state, setState] = useState('Nepal')

  console.log('Rendering')

  return (
    <div className={styles.home}>
      <div onClick={() => setState('USA')} className={styles.item}>
        {state}
      </div>
    </div>
  )
}

export default HomeBody
