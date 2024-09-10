import { faBars, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Sidebar, Menu, MenuItem} from 'react-pro-sidebar';

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
        <Sidebar collapsed={isCollapsed } backgroundColor='black'  className='shadow h-100 border-0'>
            <FontAwesomeIcon icon={faBars} onClick={handleCollpase} size='2xl ps-4 mt-4 mb-3 text-warning'/>
            <Menu menuItemStyles={{
                button:{
                    // "color": "yellow",
                    ":hover": { backgroundColor: 'grey', color: 'white' }
                }
            }}>
                
                <MenuItem> Documentation </MenuItem>
                <MenuItem> Calendar </MenuItem>
                <MenuItem> Calendar </MenuItem>
                <MenuItem ><FontAwesomeIcon icon={faPowerOff} size='xl' className='text-warning me-3'/> Logout </MenuItem>
            </Menu>
        </Sidebar>
    )
}

export default SideControls