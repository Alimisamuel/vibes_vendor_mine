import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import ReactApexChart from 'react-apexcharts';

const Charts = ({color}) => {
    const [state, setState] = React.useState({
        series: [
       
      
         
          {
            name: 'PRODUCT D',
            data: [21, 7, 25, 13, 22, 80, 20, 60]
          }
        ],
        options: {
          chart: {
            foreColor:"#000",
            fontFamily:'outfit',
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
              show: false
            },
         
            zoom: {
              enabled: true
            }
          },
          dataLabels:{
enabled:false
          },
        
          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  position: 'bottom',
                  offsetX: -10,
                  offsetY: 0
                }
              }
            }
          ],
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 3, columnWidth: '12px',
             
              dataLabels: {
             
              }
            }
          },
          xaxis: {
            type: 'category',
            categories: [
              'Sun',
              'Mon',
              'Tue',
              'Wed',
              'Thur',
              'Fri',
              'Sat',
              'Today'
            ]
          },
          legend: {
            position: 'right',
            offsetY: 40
          },
          fill: {
            opacity: 1,
            colors:color,
          }
        }
      });
    
      return (
        <div>
          <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="bar" height={200} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
}

export default Charts