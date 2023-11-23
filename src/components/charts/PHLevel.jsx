
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Evolución del nivel de PH',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Horas',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Niveles de PH',
        },
      },
    },
  };
  
  const labels = [
    '6:00 AM',
    '9:00 AM',
    '12:00 PM',
    '3:00 PM',
    '6:00 PM',
    '9:00 PM',
    '12:00 AM',
  ];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Camión 1',
        data: [7.2, 7.5, 7.0, 7.3, 7.6, 7.8, 7.4], // Niveles de pH para Camión 1
        borderColor: 'rgba(45, 212, 191, 1)', //cyan-400
        backgroundColor: 'rgba(34, 211, 238, 0.5)',
      },
      {
        label: 'Camión 2',
        data: [7.3, 7.6, 7.5, 7.2, 7.7, 7.5, 7.1], // Niveles de pH para Camión 2
        borderColor: 'rgba(34, 211, 238, 1)', //sky-400
        backgroundColor: 'rgba(34, 211, 238, 0.5)',
      },
    ],
  };
      
  
  function PHLevel() {
    return <Line 
    options={options} 
    data={data} 
    />;
  }
  
  
  export default PHLevel
  