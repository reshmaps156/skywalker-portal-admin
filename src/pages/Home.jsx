import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { faJedi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './home.css'
import {  Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Home() {
  const [loginDetails,setLoginDetails] = useState({
    username:'',
    password:''
  })
  const handleLogin = ()=>{
    const {username,password} = loginDetails
    if(!username || !password){
      toast.info('Please fill the form completely')
    }
  }
  console.log(loginDetails);
  
  return (
    <div className='container '>
        <Row className=' mt-5 pt-5'>
            <Col md={6} xs={12} className='p-5 d-flex flex-column align-items-center justify-content-center'>
            <h3><FontAwesomeIcon icon={faJedi} className='text-warning' /> Skywalker Portal</h3>
            
            </Col>
            <Col  md={6} xs={12} className='p-5'>
            <h4 className='text-center'>Welcome</h4>
            <p className='text-center mb-5'>Please login to admin dashboard</p>
           <div className='mb-4'>
             <input type="text" placeholder='username' className='custom-input w-100' onChange={(e)=>setLoginDetails({...loginDetails,username:e.target.value})}/>
             </div>
            <div className='mb-4'>
              <input type="text" placeholder='password'  className=' custom-input w-100'  onChange={(e)=>setLoginDetails({...loginDetails,password:e.target.value})}/>
              </div>
            <button className='btn-warning  w-100 mb-4 custom-button' onClick={handleLogin}>Login</button>
            </Col>
        </Row>
        <ToastContainer position='top-center' theme='dark' transition={Slide} autoClose={1500}/>
    </div>
  )
}

export default Home