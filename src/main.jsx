import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import Datashare from './utils/Datashare.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Datashare>
     <BrowserRouter>
      <App />
      </BrowserRouter>
   </Datashare>
  </StrictMode>,
)
