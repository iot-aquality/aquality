
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
        text: 'Horas',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Calidad del Agua %',
      },
    },
  },
};

const labels = [
  '7:00 AM',
  '9:00 AM',
  '12:00 PM',
  '16:00 PM',
  '17:00 PM',
  '18:00 PM',
  '19:00 PM',
];

export const data = {
  labels,
  datasets: [
    {
      label: 'Camión 1',
      data: [80, 90, 75, 85, 95, 80, 88], // Porcentajes de calidad del agua para Camión 1
      borderColor: 'rgba(45, 212, 191, 1)', //cyan-400
      backgroundColor: 'rgba(34, 211, 238, 0.5)',
    },
    {
      label: 'Camión 2',
      data: [70, 85, 80, 75, 90, 85, 80], // Porcentajes de calidad del agua para Camión 2
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
