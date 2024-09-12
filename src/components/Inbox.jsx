import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { inboxApi } from '../services/api';
import { faEnvelope, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Inbox() {
  const [allInbox,setAllInbox] = useState([])
  const getInboxData = async()=>{
    const result = await inboxApi()
    const fetchedInbox = result.data
    setAllInbox(fetchedInbox)
   }
 console.log(allInbox);
 
 useEffect(()=>{
  
  getInboxData()
 },[])
  return (
    <>
 
    <div className='px-md-4'>
    <Table striped bordered hover responsive variant="black" >
      <thead>
        <tr className='text-center'>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Subject</th>
          <th>Aciton</th>
          
        </tr>
      </thead>
      <tbody className='text-center'>
        {
          allInbox?.map((inbox,index)=>(<tr>
            <td>{index+1}</td>
            <td>{inbox.username}</td>
            <td>{inbox.email}</td>
            <td>{inbox.mobileNumber}</td>
            <td>{inbox.subject}</td>
            <td>
             <div className='d-flex justify-content-evenly'> 
              <button className='btn btn-outline-warning'><FontAwesomeIcon icon={faEnvelope} /></button>
              <button className='btn btn-outline-danger'><FontAwesomeIcon icon={faTrashCan} /></button>
             </div>
              </td>
          </tr>
          ))
        }
        
      </tbody>
    </Table>
    </div>
    </>
  )
}

export default Inbox