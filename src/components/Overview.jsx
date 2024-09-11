import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark, faEnvelopesBulk, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import { BarChart } from '@mui/x-charts/BarChart';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
function Overview() {
  // const position = [10.530345, 76.214729];
  // const columns = [
  //   { field: 'id', headerName: 'ID',flex:1},
  //   {
  //     field: 'age',
  //     headerName: 'Age',
  //     type: 'number',
  //     flex:1
     
  //   },
  //   {
  //     field: 'fullName',
  //     headerName: 'Full name',
  //     description: 'This column has a value getter and is not sortable.',
  //     flex:4
  //   }
  // ];
  
  // const rows = [
  //   { id: 1,fullName:'john Snow', age: 35 },
  //   { id: 2, fullName:'john Snow',firstName: 'Cersei', age: 42 },
  //   { id: 3,fullName:'john Snow', age: 45 },
  //   { id: 4,fullName:'john Snow', age: 16 },
  //   { id: 5,fullName:'john Snow', age: 28 },
  //   { id: 6,fullName:'john Snow', age: 150 },
  //   { id: 7,fullName:'john Snow', age: 44 },
  //   { id: 8,fullName:'john Snow ', age: 36 },
  //   { id: 9,fullName:'john Snow', age: 65 },
  // ];
  
  // const paginationModel = { page: 0, pageSize: 4 };
  return (

   <>
      <div className="row w-100 " style={{ padding: '20px' }}>
        <div className="col-12 ">
          <div className=" rounded-3 p-4 mb-3" style={{ backgroundColor: '#1f1f1f', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <h5 className="mb-2" style={{ fontWeight: 'bold' }}>Overview</h5>
            <p className="text-muted" style={{ marginBottom: '20px' }}>Request Summary</p>
            <div
              className="d-grid gap-3"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '16px',
              }}
            >
              <div className="rounded p-4 text-center" style={{ backgroundColor: '#2b2b2b', border: '1px solid #3c3c3c', transition: 'transform 0.3s', cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faEnvelopesBulk} size="2x" className="mb-2 text-primary" />
                <h4 className="my-2">80K</h4>
                <p className="text-muted">Total Requests</p>
              </div>
              <div className="rounded p-4 text-center" style={{ backgroundColor: '#2b2b2b', border: '1px solid #3c3c3c', transition: 'transform 0.3s', cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faCircleCheck} size="2x" className="mb-2 text-success" />
                <h4 className="my-2">50K</h4>
                <p className="text-muted">Resolved Requests</p>
              </div>
              <div className="rounded p-4 text-center" style={{ backgroundColor: '#2b2b2b', border: '1px solid #3c3c3c', transition: 'transform 0.3s', cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faHourglassHalf} size="2x" className="mb-2 text-warning" />
                <h4 className="my-2">20K</h4>
                <p className="text-muted">Pending Requests</p>
              </div>
              <div className="rounded p-4 text-center" style={{ backgroundColor: '#2b2b2b', border: '1px solid #3c3c3c', transition: 'transform 0.3s', cursor: 'pointer' }}>
              <FontAwesomeIcon icon={faCircleXmark} size="2x" className="mb-2 text-danger" />
                <h4 className="my-2">10K</h4>
                <p className="text-muted">Rejected Requests</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ paddingLeft: '20px'}}>
      <div className="col-md-4">
        <div className=" rounded-3 p-4 mb-3" style={{ backgroundColor: '#1f1f1f', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
          <h5 className="mb-3 fw-bold" >Levels</h5>
          <p className="text-muted" >Performance Chart</p>
          <BarChart className='bg-secondary rounded'
            series={[
              { data: [48, 50, 60] ,color:'#2a9fd6'},
              { data: [30, 42, 40] ,color:'#77b300'},
              { data: [18, 8, 20] ,color:'#ff8800'},
             
            ]}
            height={200}
            xAxis={[{ data: ['2022', '2023', '2024'], scaleType: 'band' }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          />
        </div>
      </div>
     <div className="col-md-8">
      {/* <Paper >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5]}
          checkboxSelection
        
        />
      </Paper> */}
     </div>
      </div>
   </>

  );
}

export default Overview;
