import { useState } from 'react'
import './home.css'

function Home() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="wrapper">
      <button onClick={() => setIsOpen(true)}>Delete iPhone!</button>
      {/* Short circuiting (||, &&): JavaScript */}
      {isOpen && (
        <>
          <div className="overlay" />
          <div className="modal">
            <div>
              <div>Are you sure?</div>
            </div>
            <button onClick={() => setIsOpen(false)} className="close">
              x
            </button>
          </div>
        </>
      )}
      <div className="notModal">
        <img src="https://images.hindustantimes.com/tech/img/2023/08/12/960x540/iPhone_1691841077285_1691841077505.jpg" alt="" />
      </div>
    </div>
  )
}

export default Home
