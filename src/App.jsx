import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Adminpanel from './pages/Adminpanel'
import ProtectedRoutes from './utils/ProtectedRoutes'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<ProtectedRoutes/>}>
        <Route path='/admin' element={<Adminpanel/>}/>
        </Route>
      </Routes>
       
    </>
  )
}

export default App
