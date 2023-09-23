import { useState } from 'react'
import { createPortal } from 'react-dom'

import './app.css'

function App() {
  const [open, setOpen] = useState(false)

  // falsy values
  // false, 0, undefined, null, '', NaN

  // Short circuiting (|| -> Logical OR, && -> Logical AND)
  // falsy || truthy -> truthy

  console.log('Running')

  return (
    <div className="wrapper">
      <div>
        <button className="btn" onClick={() => setOpen(true)}>
          Open Detail!
        </button>
        <div className="card">
          <h1>iPhone 15</h1>
          <img className="iPhoneImg" src="https://images.macrumors.com/article-new/2023/09/iPhone-15-General-Feature-Black.jpg" alt="iPhone 15" />
        </div>

        {open &&
          createPortal(
            <>
              <div className="overlay"></div>

              <div className="modal">
                <div>This is the detail of iPhone</div>
                <button onClick={() => setOpen(false)} className="close">
                  X
                </button>
                <button>Delete</button>
                <button onClick={() => setOpen(false)}>Close</button>
              </div>
            </>,
            document.getElementById('modal')
          )}

        <div className="content">I am not part of modal</div>
      </div>
    </div>
  )
}

export default App

// ReactDOM.createPortal()

// 0 || 1 -> 1
// 1 || 0 -> 1
// 1 || 1 -> 1
// 0 || 0 -> 0

// 0 && 1 -> 0
// 1 && 0 -> 0
// 1 && 1 -> 1
// 0 && 0 -> 0
