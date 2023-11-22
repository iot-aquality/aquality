import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: 'Nivel del Agua en los Camiones',
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Camión',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Nivel del Agua',
      },
    },
  },
};



export const data = {
    labels: ['Truck 1', 'Truck 2', 'Truck 3', 'Truck 4', 'Truck 5', 'Truck 6', 'Truck 7'],
    datasets: [
      {
        label: 'Current Water Level',
        data: [300, 450, 550, 650, 700, 800, 750], // Reemplaza estos valores con los niveles actuales de agua para cada camión
        backgroundColor: 'rgba(45, 212, 191, 0.8)', // Puedes personalizar el color de fondo
      },
    ],
  };
  
  

function WaterLevel() {
  return <Bar options={options} data={data} />;
}

export default WaterLevel;
