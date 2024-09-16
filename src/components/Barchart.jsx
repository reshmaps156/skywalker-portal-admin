import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
function Barchart() {
    return (
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
    )
}

export default Barchart