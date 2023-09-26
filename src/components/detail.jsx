import { useState } from 'react'

function Detail({ loading, update, updateCountry }) {
  const [state, setState] = useState('')
  console.log('Rendering Detail component')

  function handleClick() {
    console.log('Clicked on Refresh button')

    // Updating local state (state in Detail component above)
    setState('India')

    // Transferring state from child (Detail) to parent (App)
    updateCountry('India')

    // Updating state (is in Parent -> App) from child Detail
    update()
  }

  return loading ? (
    <div>
      Loading...
      <div>Value of country in Detail component: {state}</div>
    </div>
  ) : (
    <div>
      <div>Data received...</div>
      {console.log('JSX of Detail component is Running!')}
      <button onClick={handleClick}>Refresh</button>
      <br />
    </div>
  )
}

export default Detail
