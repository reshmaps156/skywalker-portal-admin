import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Adminpanel from './pages/Adminpanel'
import ProtectedRoutes from './utils/ProtectedRoutes'
import Message from './pages/Message'
import Inbox from './components/Inbox'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<ProtectedRoutes/>}>
        <Route path='/admin' element={<Adminpanel/>}/>
        <Route path='/inbox' element={<Inbox/>}/>
        <Route path='/admin/message' element={<Message/>}/>
        </Route>
      </Routes>
       
    </>
  )
}

export default App
