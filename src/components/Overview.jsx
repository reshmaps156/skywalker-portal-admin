import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark, faEnvelopesBulk, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import { BarChart } from '@mui/x-charts/BarChart';
import Card from 'react-bootstrap/Card';
import 'leaflet/dist/leaflet.css';


function Overview() {

  return (

    <>
      <div className="  w-100" style={{ padding :'20px' }}>
        <div >
          <div className=" rounded-3 p-4 mb-3 row" style={{ backgroundColor: '#1f1f1f', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <h5 className="mb-2" style={{ fontWeight: 'bold' }}>Overview</h5>
            <p className="text-muted" style={{ marginBottom: '20px' }}>Request Summary</p>
            <div className="col-md-3">
              <Card style={{ width: '100%' }} className='mb-3'>
              <div className="rounded p-4 text-center" style={{ backgroundColor: '#2b2b2b', border: '1px solid #3c3c3c', transition: 'transform 0.3s', cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faEnvelopesBulk} size="2x" className="mb-2 text-primary" />
                <h4 className="my-2">80K</h4>
                <p className="text-muted">Total Requests</p>
              </div>
              </Card>
            </div>
            <div className="col-md-3">
              <Card style={{ width: '100%' }} className='mb-3'>
              <div className="rounded p-4 text-center" style={{ backgroundColor: '#2b2b2b', border: '1px solid #3c3c3c', transition: 'transform 0.3s', cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faCircleCheck} size="2x" className="mb-2 text-success" />
                <h4 className="my-2">50K</h4>
                <p className="text-muted">Resolved Requests</p>
              </div>
              </Card>
            </div>
            <div className="col-md-3">
              <Card style={{ width: '100%' }} className='mb-3'>
              <div className="rounded p-4 text-center" style={{ backgroundColor: '#2b2b2b', border: '1px solid #3c3c3c', transition: 'transform 0.3s', cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faHourglassHalf} size="2x" className="mb-2 text-warning" />
                <h4 className="my-2">20K</h4>
                <p className="text-muted">Pending Requests</p>
              </div>
              </Card>
            </div>
            <div className="col-md-3">
              <Card style={{ width: '100%' }} className='mb-3'>
              <div className="rounded p-4 text-center" style={{ backgroundColor: '#2b2b2b', border: '1px solid #3c3c3c', transition: 'transform 0.3s', cursor: 'pointer' }}>
              <FontAwesomeIcon icon={faCircleXmark} size="2x" className="mb-2 text-danger" />
                <h4 className="my-2">10K</h4>
                <p className="text-muted">Rejected Requests</p>
              </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="row" >
        <div className="col-md-8">
          <div className=" rounded-3 p-4 mb-3" style={{ backgroundColor: '#1f1f1f', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <h5 className="mb-3 fw-bold" >Levels</h5>
            <p className="text-muted" >Performance Chart</p>
            <BarChart className='bg-secondary rounded'
              series={[
                { data: [48, 50, 60], color: '#2a9fd6' },
                { data: [30, 42, 40], color: '#77b300' },
                { data: [18, 8, 20], color: '#ff8800' },
                

              ]}
              height={200}
              xAxis={[{ data: ['2022', '2023', '2024'], scaleType: 'band' }]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
          </div>
        </div>
       
      </div>
    </>

  );
}

export default Overview;
