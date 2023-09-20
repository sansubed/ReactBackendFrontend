import ReactDOM from 'react-dom/client'
import './global.css'
import Home from './pages/home/home.jsx'
import { StrictMode } from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>
)
