import React, { useState } from 'react'
import SideControls from '../components/SideControls'
import Inbox from '../components/Inbox'
import Overview from '../components/Overview'

function Adminpanel() {

  
  return (
    <>
    <div className=" w-100 m-0 p-0 d-flex" style={{backgroundColor:'#101010'}}>
      <SideControls />
      <div className='mt-5 w-100'>
        {/* <Inbox/> */}
        <Overview/>
      </div>
    </div>
    </>
  )
}

export default Adminpanel