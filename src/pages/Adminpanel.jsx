import React from 'react'
import Overview from '../components/Overview'
import SideNav from '../components/SideNav';



function Adminpanel() {

  return (

    <>
      <div className=" w-100 m-0 p-0 d-flex" style={{ backgroundColor: '#101010' }}>
        <SideNav/>
        <div className='mt-5 w-100'>
          {
            <Overview/>
          }
        </div>
      </div>
    </>
  )
}

export default Adminpanel