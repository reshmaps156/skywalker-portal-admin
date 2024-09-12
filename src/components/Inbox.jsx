import React, { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { inboxApi } from '../services/api';
import { faEnvelope, faMagnifyingGlass, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { viewMessageContext } from '../utils/Datashare';
function Inbox() {
  const [allInbox, setAllInbox] = useState([]);
  const {setViewMessage} = useContext(viewMessageContext)
  const getInboxData = async () => {
    try {
      const result = await inboxApi();
      const fetchedInbox = result.data;
      setAllInbox(fetchedInbox);
    } catch (error) {
      console.error('Error fetching inbox data:', error);
      
    }
  };

  const readMessage = (msg)=>{
    let messageDetails = msg
   setViewMessage(messageDetails)
   setViewMsgComponent(true)
  }


  useEffect(() => {
    getInboxData();
  }, []);

  return (
    <div className='px-md-4'>
      <div className='d-flex'>
        <input
          type="text"
          className='form-control w-25 mb-3 rounded-5 bg-secondary'
          placeholder='Search'
          
        />
        <div className='d-flex mb-3 align-items-center'>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginLeft: '-30px' }} />
        </div>
      </div>
      <Table striped bordered hover responsive >
        <thead>
          <tr className='text-center'>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Subject</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {allInbox?.map((inbox, index) => (
            <tr key={inbox._id }>
              <td>{index + 1}</td>
              <td>{inbox.username}</td>
              <td>{inbox.email}</td>
              <td>{inbox.mobileNumber}</td>
              <td>{inbox.subject}</td>
              <td>
                <div className='d-flex justify-content-evenly'>
                  <Link to={'/admin/message'}>
                    <button
                      type='button'
                      className='btn btn-outline-warning'
                      aria-label='View message'
                     onClick={()=>readMessage(inbox)}
                    >
                      <FontAwesomeIcon icon={faEnvelope} />
                    </button>
                  </Link>
                  <button
                    type='button'
                    className='btn btn-outline-danger'
                    aria-label='Delete message'
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Inbox;
