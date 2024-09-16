import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
function Piechart() {
  return (
    <PieChart 
    colors={['red,orange,yellow']}
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'High',color:'red'},
            { id: 1, value: 15, label: 'Medium',color:'orange' },
            { id: 2, value: 20, label: 'Low',color:'yellow' },
          ],
        },
      ]}
      width={350}
      height={200}
    />
  )
}

export default Piechart