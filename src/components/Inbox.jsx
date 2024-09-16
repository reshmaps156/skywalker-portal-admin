import React, { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import SideNav from '../components/SideNav';
import { deleteGrievanceApi, inboxApi } from '../services/api';
import { faEnvelope, faMagnifyingGlass, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { viewMessageContext } from '../utils/Datashare';

function Inbox() {
  const [allInbox, setAllInbox] = useState([]);
  const { setViewMessage } = useContext(viewMessageContext);
  const [searchKey, setSearchKey] = useState('');

  const getInboxData = async () => {
    try {
      const result = await inboxApi(searchKey);
      const fetchedInbox = result.data;
      setAllInbox(fetchedInbox);
    } catch (error) {
      console.error('Error fetching inbox data:', error);
    }
  };

  const readMessage = (msg) => {
    setViewMessage(msg);
  };

  const handleDelete = async (id) => {
    try {
      await deleteGrievanceApi(id);
      getInboxData();
    } catch (error) {
      console.error( error);
    }
  };

  useEffect(() => {
    getInboxData();
  }, [searchKey]); 

  return (
    <div className="w-100 m-0 p-0 d-flex" >
      <SideNav />
      <div className='mt-5 w-100'>
        <div className='px-md-4'>
          <div className='d-flex'>
            <input
              style={{color:'white'}}
              type="text"
              className='form-control w-25 mb-3 rounded-5 bg-secondary'
              placeholder='Search'
              onChange={(e) => setSearchKey(e.target.value)}
            />
            <div className='d-flex mb-3 align-items-center'>
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginLeft: '-30px' }} />
            </div>
          </div>
          <Table striped bordered hover responsive>
            <thead>
              <tr className='text-center'>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Priority</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {allInbox.map((inbox, index) => (
                <tr key={inbox._id}>
                  <td>{index + 1}</td>
                  <td>{inbox.username}</td>
                  <td>{inbox.email}</td>
                  <td>{inbox.subject}</td>
                  <td>{inbox.priority}</td>
                  <td>
                    <div className='d-flex justify-content-evenly'>
                      <Link to={'/admin/message'}>
                        <button
                          type='button'
                          className='btn btn-outline-warning'
                          aria-label='View message'
                          onClick={() => readMessage(inbox)}
                        >
                          <FontAwesomeIcon icon={faEnvelope} />
                        </button>
                      </Link>
                      <button
                        type='button'
                        className='btn btn-outline-danger'
                        aria-label='Delete message'
                        onClick={() => handleDelete(inbox._id)}
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
      </div>
    </div>
  );
}

export default Inbox;
