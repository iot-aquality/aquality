import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Cantidad de agua perdida por camión',
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Cantidad de agua (L)',
      },
    },
  },
};



const labels = ['Truck 1', 'Truck 2', 'Truck 3', 'Truck 4', 'Truck 5', 'Truck 6', 'Truck 7']


const generateRandomValues = () => {
  return labels.map(() => Math.floor(Math.random() * 5000));
};

const data = {
  labels,
  datasets: [
    {
      label: 'Agua total',
      data: generateRandomValues(),
      borderColor: 'rgba(45, 212, 191, 1)', //cryan-400
      backgroundColor: 'rgba(34, 211, 238, 0.5)',

    },
    {
      label: 'Agua Perdida',
      data: generateRandomValues().map(value => Math.min(value, 500)),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

function WaterLevelLoss() {
  return <Bar options={options} data={data} />;
}

export default WaterLevelLoss;
