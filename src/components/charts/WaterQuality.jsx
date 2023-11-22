
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
      text: 'Evolución de la calidad del agua',
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Meses',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Calidad del Agua',
      },
    },
  },
};

const labels = [
  'Enero', 
  'Febrero', 
  'Marzo', 
  'Abril', 
  'Mayo', 
  'Junio', 
  'Julio', 
];

export const data = {
  labels,
  datasets: [
    {
      label: 'Temuco',
      data: [200, 400, 0, 500, 0, 800, 0], 
      borderColor: 'rgba(45, 212, 191, 1)', //cryan-400
      backgroundColor: 'rgba(34, 211, 238, 0.5)',
    },
    {
      label: 'Freire',
      data: [500, 0, 100, 0, 600, 0, 900], 
      borderColor: 'rgba(34, 211, 238, 1)', //sky-400
      backgroundColor: 'rgba(34, 211, 238, 0.5)',
    },
  ],
};
  

function WaterQuality() {
  return <Line 
  options={options} 
  data={data} 
  />;
}


export default WaterQuality
