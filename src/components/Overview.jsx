import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark, faEnvelopesBulk, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import Piechart from './Piechart';
import Barchart from './Barchart';
import { userRequestContext } from '../utils/Datashare';


function Overview() {
  const {userRequest} = useContext(userRequestContext)
  const totalReq = userRequest.length
  const overviewData = [{ icon: faEnvelopesBulk, value: totalReq, caption: 'Total Requests', color: 'text-primary' },
    
  { icon: faCircleCheck, value:" 89%", caption: 'Success Rate', color: 'text-success' },
  { icon: faHourglassHalf, value: totalReq, caption: 'Pending Requests', color: 'text-warning' },
  { icon: faCircleXmark, value: '11%', caption: 'Failure Rate', color: 'text-danger' }]
  
    
  return (

    <>
      <div style={{ padding: '20px' }}>
        <div >
          <div className=" rounded-3 p-4 mb-3 row" style={{ backgroundColor: '#1f1f1f', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <h5 className="mb-2" style={{ fontWeight: 'bold' }}>Overview</h5>
            <p className="text-muted" style={{ marginBottom: '20px' }}>Request Summary</p>
            {
              overviewData?.map((data) => (
                <div className="col-md-3">
                  <Card style={{ width: '100%' }} className='mb-3'>
                    <div className="rounded p-4 text-center" style={{ backgroundColor: '#2b2b2b', border: '1px solid #3c3c3c', transition: 'transform 0.3s', cursor: 'pointer' }}>
                      <FontAwesomeIcon icon={data.icon} size="2x" className={`${data.color} mb-3`} />
                      <h4 className="my-2">{data.value}</h4>
                      <p className="text-muted">{data.caption}</p>
                    </div>
                  </Card>
                </div>
              ))
            }

          </div>
        </div>
      </div>

      <div className="row "   >
        <div className="col-md-7">
          <div className=" rounded-3 p-4 mb-3" style={{ backgroundColor: '#1f1f1f', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <h5 className="mb-3 fw-bold" >Levels</h5>
            <p className="text-muted" >Performance Chart</p>
            <Barchart />
          </div>
        </div>
        <div className="col-md-5 rounded-2  " style={{ backgroundColor: '#1f1f1f', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
          <h5 className='fw-bold mb-3 p-4'>Priority</h5>
          <Piechart />
        </div>

      </div>
    </>

  );
}

export default Overview;
