import { faArrowRightFromBracket, faBoxesStacked, faInbox, faJedi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

function SideControls() {
    const [isCollapsed, setIsCollpased] = useState(false)
    const handleCollpase = () => {
        setIsCollpased(!isCollapsed)
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
        <Sidebar collapsed={isCollapsed} backgroundColor='#101010' className='shadow h-100 border-0' >
            <div className=' border border-4 border-warning rounded-circle d-flex align-items-center justify-content-center ms-3 my-4 ' style={{ width: '40px', height: '40px', cursor: 'pointer' }} onClick={handleCollpase}>
                <FontAwesomeIcon icon={faJedi} size='xl  text-warning' />
            </div>
            <Menu menuItemStyles={{
                button: {
                    
                    ":hover": { backgroundColor: '#2b2b2b', color: 'white', borderEndEndRadius:'20px',borderTopRightRadius:'20px'}
                }
            }}>
                <MenuItem> <FontAwesomeIcon icon={faBoxesStacked} size='xl' className=' me-3 ' />Dashboard </MenuItem>
                <MenuItem> <FontAwesomeIcon icon={faInbox} size='xl' className=' me-3 ' />Inbox </MenuItem>
                <MenuItem ><FontAwesomeIcon icon={faArrowRightFromBracket} size='xl' className=' me-3 ' /> Logout </MenuItem>
            </Menu>
        </Sidebar>
    )
}

export default SideControls