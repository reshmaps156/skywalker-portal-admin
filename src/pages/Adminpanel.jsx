import React, { useEffect, useState } from 'react'
import { faArrowRightFromBracket, faBoxesStacked, faInbox, faJedi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import Inbox from '../components/Inbox'
import Overview from '../components/Overview'
import { useNavigate } from 'react-router-dom';



function Adminpanel() {

  const [isCollapsed, setIsCollpased] = useState(false)
  const [isOverview,setIsOverview] = useState(true)
  const [isInbox,setIsInbox] = useState(false)
  const navigate = useNavigate()
  const handleCollpase = () => {
    setIsCollpased(!isCollapsed)
  }
  const openOverview = ()=>{
    setIsOverview(true)
    setIsInbox(false)
  }
  const openInbox = ()=>{
    setIsInbox(true)
    setIsOverview(false)
  }

  const handleLogout = ()=>{
   sessionStorage.removeItem("token")
   sessionStorage.removeItem("currentAdmin")
   navigate('/')
    
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsCollpased(true)
        
      } else {
        setIsCollpased(false)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.addEventListener('resize', handleResize)
    }
  }, [])
  return (

    <>
      <div className=" w-100 m-0 p-0 d-flex" style={{ backgroundColor: '#101010' }}>
        <Sidebar collapsed={isCollapsed} backgroundColor='#101010' className='shadow h-100 border-0' width='200px' >
          <div className='logo border border-4 border-warning rounded-circle d-flex align-items-center justify-content-center ms-3 my-4 ' style={{ width: '40px', height: '40px', cursor: 'pointer' }} onClick={handleCollpase}>
            <FontAwesomeIcon icon={faJedi} size='xl  text-warning' />
          </div>
          <Menu menuItemStyles={{
            button: {

              ":hover": { backgroundColor: '#2b2b2b', color: 'white', borderEndEndRadius: '20px', borderTopRightRadius: '20px' }
            }
          }}>
            <MenuItem onClick={openOverview}> <FontAwesomeIcon icon={faBoxesStacked} size='xl' className=' me-3 ' />Dashboard </MenuItem>
            <MenuItem onClick={openInbox}> <FontAwesomeIcon icon={faInbox} size='xl' className=' me-3 ' />Inbox </MenuItem>
            <MenuItem onClick={handleLogout}><FontAwesomeIcon icon={faArrowRightFromBracket} size='xl' className=' me-3 ' /> Logout </MenuItem>
          </Menu>
        </Sidebar>
        <div className='mt-5 w-100'>
          {
            isInbox && <Inbox/> || isOverview && <Overview/>
          }
        </div>
      </div>
    </>
  )
}

export default Adminpanel