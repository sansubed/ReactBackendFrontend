import { useState } from 'react'
import './app.css'

function App() {
  const [open, setOpen] = useState(true)

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

        {open && (
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
          </>
        )}
      </div>
    </div>
  )
}

export default App

// 0 || 1 -> 1
// 1 || 0 -> 1
// 1 || 1 -> 1
// 0 || 0 -> 0

// 0 && 1 -> 0
// 1 && 0 -> 0
// 1 && 1 -> 1
// 0 && 0 -> 0
