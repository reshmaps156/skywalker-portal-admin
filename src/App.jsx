import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Adminpanel from './pages/Adminpanel'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Adminpanel/>}/>
      </Routes>
       
    </>
  )
}

export default App
