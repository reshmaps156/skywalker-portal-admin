import React, {  useContext, useEffect } from 'react'
import Overview from '../components/Overview'
import SideNav from '../components/SideNav';
import { userRequestContext } from '../utils/Datashare';
import { inboxApi } from '../services/api';



function Adminpanel() {
  const {setUserRequest} = useContext(userRequestContext)
  const getUserData = async () => {
    try {
      const result = await inboxApi('');
      const fetchedInbox = result.data;
      console.log(fetchedInbox);
      setUserRequest(fetchedInbox)
      
    } catch (error) {
      console.error('Error fetching inbox data:', error);
    }
  };
  useEffect(()=>{
    getUserData()
  },[])
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