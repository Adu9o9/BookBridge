import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, animator } from 'chart.js';
import useBackground from '../hooks/useBackground';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Charts = () => {
  const {isDark} = useBackground();
    const data = {
        labels: ['Books Received', 'Donated'], // X values
        datasets: [
          {
            label: 'Number of Books',
            data: [1500, 750], // Example data values
            backgroundColor: ['rgba(23,64,150,1)',
                'rgba(225,0,0,0.7)'
            ], // Bar color
            borderColor: 'rgba(75, 192, 192, 1)', // Bar border color
            borderWidth: 1,
          },
        ],
      };
    
      const options = {
        responsive: true,
        indexAxis: 'y', // This makes the chart horizontal
        plugins: {
          legend: {
            labels:{
              color: !isDark ? 'white' : 'black'
            },
          },

          tooltip: {
            callbacks: {
              label: (tooltipItem) => `Count: ${tooltipItem.raw}`,
            },
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              color: !isDark ? 'white' : 'black', // Set X-axis tick color
            },
            grid: {
              color: !isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)', // Set X-axis grid color
            },
          },
          y: {
            ticks: {
              color: !isDark ? 'white' : 'black', // Set Y-axis tick color
            },
            grid: {
              color: !isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)', // Set Y-axis grid color
            },
          }
        },
      };

      
    
  return (
    
    <div className={`flex h-[200px] w-[70%] mt-5 justify-center text-white ${!isDark?"bg-slate-800":""}`}>
      <Bar data={data} options={options} width="400px" height={"100px"}/>
    </div>
  )
}

export default Charts
