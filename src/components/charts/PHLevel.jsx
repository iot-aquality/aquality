
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
          text: 'Semana 1',
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
    'Lunes', 
    'Martes', 
    'Miercoles', 
    'Jueves', 
    'Viernes', 
    'Sabado', 
    'Domingo', 
  ];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Temuco',
        data: [5, 6, 0, 5, 6, 8, 7], 
        borderColor: 'rgba(45, 212, 191, 1)', //cryan-400
        backgroundColor: 'rgba(34, 211, 238, 0.5)',
      },
      {
        label: 'Freire',
        data: [5, 6, 5, 5, 6, 8, 7], 
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
  