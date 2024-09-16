import React, { useContext } from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { userRequestContext } from '../utils/Datashare';
function Piechart() {
    const {userRequest} = useContext(userRequestContext)
    const totalHigh = userRequest.filter(req=>req.priority=='High').length
    const totalMedium = userRequest.filter(req=>req.priority=='Medium').length
    const totalLow = userRequest.filter(req=>req.priority=='Low').length
  
  return (
    <PieChart className='p-4 p-md-0'
    colors={['red,orange,yellow']}
      series={[
        {
          data: [
            { id: 0, value: totalHigh, label: 'High',color:'red'},
            { id: 1, value: totalMedium, label: 'Medium',color:'orange' },
            { id: 2, value: totalLow, label: 'Low',color:'yellow' },
          ],
        },
      ]}
      width={350}
      height={200}
    />
  )
}

export default Piechart