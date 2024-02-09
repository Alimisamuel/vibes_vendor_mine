import React, {useState} from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const Donut = () => {
   const data =  [
    { id: 0, value: 20, label: 'series A' },
    { id: 1, value: 15, label: 'series B' },
    { id: 2, value: 10, label: 'series C' },
  ]
  return (
  <>
   <div>
     <PieChart
     colors={["#ffffff", "#ffffff4d", "#ffffffcc"]}
     
     series={[
        {
            data:data,
            innerRadius: 20,
            outerRadius: 50,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: 0,
            endAngle: 360,
          cx:100,
      
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        }
     ]}
     width={400}
     height={100}
     />
    </div>
  </>
  )
}

export default Donut